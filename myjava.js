document.addEventListener("DOMContentLoaded", function() {
    // Select Webflow elements by ID
    const form = document.getElementById("wf-form-Appointment-form");
    const nameInput = document.getElementById("your-name");
    const nameError = document.getElementById("name-error");
    const submitButton = document.getElementById("submit");

    // Initially hide the submit button
    submitButton.style.display = "none"; // Hide the submit button
    submitButton.type = "button"; // Prevent form submission by default

    // Check for the correct name input and show the button when valid
    nameInput.addEventListener("input", function() {
        const name = nameInput.value.trim();

        // Hide error message initially
        nameError.style.display = "none";

        // Show the submit button only if name is valid
        if (name && name !== "RobertReiff" && name !== "AnnaReiff") {
            submitButton.style.display = "block"; // Show the submit button
            submitButton.type = "submit";  // Allow form submission
        } else {
            submitButton.style.display = "none"; // Hide the submit button
            submitButton.type = "button"; // Prevent form submission
        }
    });

    // Handle form submission
    form.addEventListener("submit", function(event) {
        const name = nameInput.value.trim();

        // If the name is invalid, show the error message and prevent form submission
        if (name === "" || name === "RobertReiff" || name === "AnnaReiff") {
            event.preventDefault();
            nameError.style.display = "block"; // Show error message
        }
    });
});
