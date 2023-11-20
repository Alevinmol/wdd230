// Function to set the current date/time in milliseconds to the hidden input field
function setDateTime() {
    var currentDate = Date.now();
    document.getElementById('hiddenDateTime').value = currentDate;
}

// Event listener to call setDateTime() when the form is loaded
document.addEventListener('DOMContentLoaded', setDateTime);