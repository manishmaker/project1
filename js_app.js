document.addEventListener("DOMContentLoaded", () => {
    // Handling all buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const buttonText = event.target.textContent.trim();
            alert(`You clicked: ${buttonText}`);
        });
    });

    // Handling the booking form submission
    const bookingForm = document.querySelector(".header__form form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const firstName = document.querySelector("input[placeholder='First Name']").value.trim();
            const lastName = document.querySelector("input[placeholder='Last Name']").value.trim();
            const address = document.querySelector("input[placeholder='Address']").value.trim();
            const phone = document.querySelector("input[placeholder='Phone No.']").value.trim();

            if (!firstName || !lastName || !address || !phone) {
                alert("Please fill in all fields before booking.");
                return;
            }

            alert(`Appointment booked successfully for ${firstName} ${lastName}!`);
            bookingForm.reset();
        });
    }
});
