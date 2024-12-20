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

// Initialize Swiper slider with autoplay functionality
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000, // Time between slides in milliseconds (3 seconds)
    disableOnInteraction: false, // Continue autoplay after interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Function to close the booking popup
function closePopup() {
  document.getElementById('booking-popup').style.display = 'none';
}

// Handle booking form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Your appointment has been booked!');
    closePopup();
  });
});

// Contact form validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return false;
  }
  return true;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Add hover effect to treatment cards using jQuery
$(document).ready(function () {
  $('.treatmentsinr').hover(
    function () {
      $(this).find('img').css('transform', 'scale(1.1)');
    },
    function () {
      $(this).find('img').css('transform', 'scale(1)');
    }
  );
});
