const filterButtons = document.querySelectorAll('.filter-button');
const filterItems = document.querySelectorAll('.filter-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    filterButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    filterItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});
