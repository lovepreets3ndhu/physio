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
//what we treat
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
      startX,
      startScrollLeft,
      autoPlayTimeout;

  const autoPlay = () => {
      autoPlayTimeout = setInterval(() => {
          carousel.scrollLeft += firstCardWidth;
          if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
              carousel.scrollLeft = 0;
          }
      }, 10000);
  };

  const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
      clearInterval(autoPlayTimeout);
  };

  const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
      autoPlay();
  };

  arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
          carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
  });

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);

  autoPlay();
});


//testimoniuals
document.addEventListener("DOMContentLoaded", () => {
  const addTestimonialBtn = document.getElementById("add-testimonial-btn");
  const modal = document.getElementById("add-testimonial-modal");
  const closeModalBtn = document.querySelector(".close-btn");
  const testimonialForm = document.getElementById("testimonial-form");
  const testimonialsWrapper = document.querySelector(".testimonials-wrapper");

  // Open modal
  addTestimonialBtn.addEventListener("click", () => {
      modal.style.display = "flex";
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Submit new testimonial
  testimonialForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const testimonialText = document.getElementById("testimonial-text").value;
      const testimonialName = document.getElementById("testimonial-name").value;

      // Create new testimonial card
      const newTestimonial = document.createElement("div");
      newTestimonial.classList.add("testimonial-card");
      newTestimonial.innerHTML = `
          <p>"${testimonialText}"</p>
          <h3>- ${testimonialName}</h3>
      `;

      // Append to testimonials wrapper
      testimonialsWrapper.appendChild(newTestimonial);

      // Reset form and close modal
      testimonialForm.reset();
      modal.style.display = "none";
  });

  // Close modal if clicked outside the content
  window.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});
