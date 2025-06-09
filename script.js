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

  function showAlumniDetail(name, role, imagePath, pesan) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalRole').innerText = role;
    document.getElementById('modalImage').src = imagePath;
    document.getElementById('modalPesan').innerText = pesan;
  }