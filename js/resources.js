// Obtener los botones y elementos de filtro
const filterButtons = document.querySelectorAll('.filter-button');
const filterItems = document.querySelectorAll('.filter-item');

// Agregar evento de clic a los botones de filtro
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover la clase 'active' de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Agregar la clase 'active' al botón seleccionado
    button.classList.add('active');

    // Obtener el valor del filtro de datos del botón seleccionado
    const filterValue = button.getAttribute('data-filter');

    // Mostrar los elementos que coincidan con la categoría seleccionada y ocultar los demás con animación
    filterItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
        setTimeout(() => {
          item.style.display = 'none';
        }, 300); // Esperar 300 ms antes de ocultar el elemento completamente
      }
    });
  });
});
