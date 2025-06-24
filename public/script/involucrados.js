async function cargarNombres() {
  const res = await fetch('/api/involucrados');
  const datos = await res.json();
  const select = document.getElementById('select-nombre');
  datos.forEach(i => {
    const option = document.createElement('option');
    option.value = i.nombre;
    option.textContent = i.nombre;
    select.appendChild(option);
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
  if (res.status === 400) return alert('Nombre no registrado');
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
    li.textContent = `${a.nombre} entregó ${a.kilos}kg de ${a.material} en ${a.lugarRecoleccion}`;
    lista.appendChild(li);
  });
}

cargarNombres();
cargarAportes();
