const displayText = document.getElementById('displayText');
const toggleButton = document.getElementById('toggleBtn');
let isOn = false; 
function toggleText() {
    if (isOn) {
        displayText.textContent = 'OFF';
        displayText.style.color = '#ffffff'; 
        isOn = false;
    } else {
        displayText.textContent = 'ON';
        displayText.style.color = '#4CAF50';
        isOn = true;
    }
}
toggleButton.addEventListener('click', toggleText);
displayText.style.transition = 'color 0.3s ease';
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        toggleText();
    }
});
