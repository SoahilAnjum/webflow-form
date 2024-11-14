<script>
document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("your-name");
    const nameError = document.getElementById("name-error");
    const submitButton = document.getElementById("submit");

    // Initial button type is "button" to prevent accidental submission
    submitButton.type = "button";

    // Check input validity on every input event
    nameInput.addEventListener("input", function() {
        const name = nameInput.value.trim();

        // Hide error message initially
        nameError.style.display = "none";

        // Validate name and update button type
        if (name && name !== "RobertReiff" && name !== "AnnaReiff") {
            submitButton.type = "submit";  // Allow form submission
        } else {
            submitButton.type = "button";  // Prevent form submission
        }
    });

    // Handle click event on submit button
    submitButton.addEventListener("click", function(event) {
        const name = nameInput.value.trim();

        // Show error message if name is invalid
        if (name === "" || name === "RobertReiff" || name === "AnnaReiff") {
            event.preventDefault();
            nameError.style.display = "block";
        }
    });
});
</script>