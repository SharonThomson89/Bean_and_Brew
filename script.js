document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you, Your message has been sent.");
            contactForm.reset();
        });
    }

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you, Your booking has been submitted");
            bookingForm.reset();
        });
    }
});