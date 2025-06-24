async function cargarInvolucrados() {
  const res = await fetch('/api/involucrados');
  const datos = await res.json();
  const lista = document.getElementById('listaInvolucrados');
  lista.innerHTML = '';
  datos.forEach(i => {
    const li = document.createElement('li');
    li.textContent = `${i.nombre} (${i.tipo})`;
    lista.appendChild(li);
  });
}

cargarInvolucrados(); // Ejecutarla al cargar la página
