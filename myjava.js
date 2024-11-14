// Function to set a cookie
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    const formSubmitted = getCookie("appointmentFormSubmitted");
    const form = document.getElementById("wf-form-Appointment-form");
    const nameInput = document.getElementById("your-name");
    const nameError = document.getElementById("name-error");
    const submitButton = document.getElementById("submit");

    // If the form was submitted in the last 24 hours, hide the form and show a message
    if (formSubmitted) {
        form.style.display = "none"; // Hide the form
        const message = document.createElement("p");
        message.innerText = "You can only submit this form once every 24 hours.";
        form.parentNode.appendChild(message);
    } else {
        // Set a cookie when the form is submitted
        form.addEventListener("submit", function() {
            setCookie("appointmentFormSubmitted", "true", 24); // Set cookie for 24 hours
        });
    }

    // Initially, the submit button type is set to "button" to prevent submission
    submitButton.type = "button";

    // Validate the name field and update button type
    nameInput.addEventListener("input", function() {
        const name = nameInput.value.trim();

        // Hide error message initially
        nameError.style.display = "none";

        // Validate the name field and enable the submit button if valid
        if (name && name !== "RobertReiff" && name !== "AnnaReiff") {
            submitButton.type = "submit";  // Allow form submission
        } else {
            submitButton.type = "button";  // Prevent form submission
        }
    });

    // Handle submit button click and validation
    submitButton.addEventListener("click", function(event) {
        const name = nameInput.value.trim();

        // If the name is invalid, show the error message and prevent form submission
        if (name === "" || name === "RobertReiff" || name === "AnnaReiff") {
            event.preventDefault();
            nameError.style.display = "block";
        }
    });
});
