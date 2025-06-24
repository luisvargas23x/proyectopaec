async function cargarInvolucrados() {
  const res = await fetch('/api/involucrados');
  const lista = await res.json();
  const select = document.getElementById('select-nombre');
  lista.forEach(i => {
    const opt = document.createElement('option');
    opt.value = i.nombre;
    opt.textContent = i.nombre;
    select.appendChild(opt);
  });
}

document.getElementById('form-aporte').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const res = await fetch('/api/aportes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.status === 400) {
    alert('El nombre no está registrado en Involucrados');
    return;
  }
  e.target.reset();
  cargarAportes();
});

async function cargarAportes() {
  const res = await fetch('/api/aportes');
  const datos = await res.json();
  const lista = document.getElementById('listaAportes');
  lista.innerHTML = '';
  datos.forEach(a => {
    const li = document.createElement('li');
    li.textContent = `${a.nombre} - ${a.kilos}kg de ${a.material} en ${a.lugarRecoleccion}`;
    lista.appendChild(li);
  });
}

cargarInvolucrados();
cargarAportes();
