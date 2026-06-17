/* This file is part of The BiTGApps Project */

document.addEventListener('DOMContentLoaded', () => {
    // Target both possible form IDs
    const buildForm0 = document.getElementById('buildForm-0');
    const buildForm1 = document.getElementById('buildForm-1');

    // Select whichever form exists
    const activeForm = buildForm0 || buildForm1;
    let autoHideTimer; // Stores the timer instance

    // Execute the code if one of the forms is found
    if (activeForm) {
        activeForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const inputElement = this.querySelector('input[name="USR"]');
            const regex = /^[a-zA-Z0-9]{7}$/; // Matches the whole string
            if (!inputElement || !regex.test(inputElement.value)) {
                alert("Error: Input must be 7 characters contain only letters and numbers.");
                return false; // Block form submission
            }

            const responseDiv = document.getElementById('serverResponse');

            // Handle double click events
            clearTimeout(autoHideTimer);

            // Reveal the alert box
            responseDiv.innerHTML = "Processing request...";
            responseDiv.className = "alert alert-warning"; // Removes 'd-none'

            const formData = new FormData(this);

            // Dynamically switch the endpoint
            let endPoint;
            if (this.id === 'buildForm-0') {
                endPoint = 'client.php';
            } else if (this.id === 'buildForm-1') {
                endPoint = 'marvin.php';
            }

            const endpoint = `https://build.bitgapps.io/${endPoint}`;

            fetch(endpoint, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                responseDiv.classList.remove('alert-warning', 'alert-success', 'alert-danger');

                if (!response.ok) {
                    responseDiv.classList.add('alert-danger');
                } else {
                    responseDiv.classList.add('alert-success');
                }
                return response.text();
            })
            .then(data => {
                responseDiv.innerHTML = data;
                // Trigger the auto-hide function after content loads
                startAutoHide(responseDiv);
            })
            .catch(error => {
                console.error('Error:', error);
                responseDiv.classList.remove('alert-warning', 'alert-success');
                responseDiv.classList.add('alert-danger');
                responseDiv.innerHTML = "Network connection error. Please try again.";
                // Trigger auto-hide for errors
                startAutoHide(responseDiv);
            });
        });
    }

    // Helper function to hide the alert
    function startAutoHide(element) {
        autoHideTimer = setTimeout(() => {
            // Insert 'd-none' class
            element.classList.add('d-none');
        }, 5000); // 5000 milliseconds = 5 seconds
    }
});
