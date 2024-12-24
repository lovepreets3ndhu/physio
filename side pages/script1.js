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