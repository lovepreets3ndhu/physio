// Select necessary elements
const scrollContainer = document.querySelector('.scroll-container');
const scrollItems = document.querySelectorAll('.scroll-item');
let currentIndex = 0;
const totalItems = scrollItems.length;

// Add event listeners for the buttons
document.querySelector('.scroll-left').addEventListener('click', scrollLeft);
document.querySelector('.scroll-right').addEventListener('click', scrollRight);

// Scroll left function (moves to the previous slide, or wraps to the last slide)
function scrollLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1; // Wrap around to the last slide
  }
  scrollToSlide(currentIndex);
}

// Scroll right function (moves to the next slide, or wraps to the first slide)
function scrollRight() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0; // Wrap around to the first slide
  }
  scrollToSlide(currentIndex);
}

// Function to scroll to the selected slide
function scrollToSlide(index) {
  const slideWidth = window.innerWidth;
  scrollContainer.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  });
}

// Handle window resize to adjust scroll position if the user resizes the window
window.addEventListener('resize', () => {
  scrollToSlide(currentIndex);
});

// Handle window resize to adjust scroll position if the user resizes the window
window.addEventListener('resize', () => {
  scrollToSlide(currentIndex);
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