async function cargarAportes() {
  const res = await fetch('/api/aportes');
  const datos = await res.json();
  const tabla = document.getElementById('tablaAportes');
  tabla.innerHTML = '';

  datos.forEach(a => {
    const row = document.createElement('tr');
    row.innerHTML = `
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
