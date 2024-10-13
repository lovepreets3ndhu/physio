// Booking popup functionality
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