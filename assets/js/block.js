/* This file is part of The BiTGApps Project */

function validateForm() {
    const inputElement = document.getElementById("client");
    const regex = /^[a-zA-Z0-9]{7}$/; // Matches the whole string
    if (regex.test(inputElement.value)) {
        return true; // Allow form submission
    } else {
        alert("Error: Input must be 7 characters contain only letters and numbers.");
        return false; // Block form submission
    }
}
