var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function closePopup() {
    document.getElementById('booking-popup').style.display = 'none';
}

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
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
