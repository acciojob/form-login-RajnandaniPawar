        function getFormvalue() {
            // Retrieve the first and last name from the form inputs
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;

            // Display the full name in an alert box
            alert(firstName + " " + lastName);
        }