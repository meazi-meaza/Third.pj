// Select elements from the DOM
const displayText = document.getElementById('displayText');
const toggleButton = document.getElementById('toggleBtn');

// Variable to track current state
let isOn = false; // Initial state is OFF

// Function to toggle the text
function toggleText() {
    if (isOn) {
        // Change from ON to OFF
        displayText.textContent = 'OFF';
        displayText.style.color = '#ffffff'; // White color for OFF
        isOn = false;
    } else {
        // Change from OFF to ON
        displayText.textContent = 'ON';
        displayText.style.color = '#4CAF50'; // Green color for ON
        isOn = true;
    }
}

// Add click event listener to the button
toggleButton.addEventListener('click', toggleText);

// Additional styling for better visual feedback
displayText.style.transition = 'color 0.3s ease';

// Optional: Add keyboard support (Space/Enter to toggle)
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        toggleText();
    }
});