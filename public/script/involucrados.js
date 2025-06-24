document.getElementById('form-involucrado').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  await fetch('/api/involucrados', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  e.target.reset();
  cargarInvolucrados();
});

async function cargarInvolucrados() {
  const res = await fetch('/api/involucrados');
  const datos = await res.json();
  const tabla = document.getElementById('tablaInvolucrados');
  tabla.innerHTML = '';

  datos.forEach(i => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${i.nombre}</td>
      <td>${i.tipo}</td>
      <td>${i.numero}</td>
      <td>${i.correo}</td>
      <td>${i.edad}</td>
    `;
    tabla.appendChild(row);
  });
}

cargarInvolucrados();

