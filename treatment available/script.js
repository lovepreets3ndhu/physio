// Function to dynamically load HTML content
function loadHTML(id, url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;
      });
  }
  
  // Load header and footer on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    loadHTML('Header', '/header/header.html');
    loadHTML('footer', '/header/footer.html');
  });
  // Change header style on scroll
  window.onscroll = function () {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100) { // Adjust this value as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  };