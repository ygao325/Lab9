document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the input field element
    const inputField = document.getElementById('inputField');
  
    // Add event listener to the form submits an event
    document.getElementById('form').addEventListener('submit', function(event) {
        // Retrieve the input field value
        const inputValue = inputField.value.trim();
  
        // Regular expression pattern for alphanumeric input
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;
  
        // Check if the input value matches the pattern
        if (!alphanumericPattern.test(inputValue)) {
            // Invalid input: display error message
            alert('Error: Input must be alphanumeric.');
            // Prevent form from submitting
            event.preventDefault();
        } else {
            // Valid input: display confirmation
            alert('Input is valid. Form will be submitted.');
        }
    });
  });
  

        