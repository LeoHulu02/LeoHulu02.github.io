document.getElementById('searchInput').addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      const name = card.querySelector('.alumni-name').textContent.toLowerCase();
      if (name.includes(keyword)) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  });