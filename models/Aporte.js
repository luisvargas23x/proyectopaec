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
  const tabla = document.getElementById('tablaAportes');
  tabla.innerHTML = '';

  datos.forEach(a => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${a.nombre}</td>
      <td>${a.tipo}</td>
      <td>${a.material}</td>
      <td>${a.estadoMaterial}</td>
      <td>${a.kilos}</td>
      <td>${a.lugarRecoleccion}</td>
      <td>${a.fechaEntrega}</td>
      <td>${a.horaEntrega}</td>
    `;
    tabla.appendChild(row);
  });
}

cargarNombres();
cargarAportes();
