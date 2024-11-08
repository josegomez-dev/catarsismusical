  // Function to create a floating music note
function createMusicNote() {
    const note = document.createElement('div');
    note.classList.add('music-note');
    note.innerText = '♪'; // You can change to '♫' for variety

    // Randomize position and size
    note.style.left = `${Math.random() * 100}%`;
    note.style.fontSize = `${Math.random() * 10 + 40}px`;

    // Randomize note colors
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#F3FF33'];
    note.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector('.music-notes').appendChild(note);

    // Remove the note after animation
    setTimeout(() => {
        note.remove();
    }, 10000); // Match this with the animation duration in CSS
}

// Add music notes at intervals
setInterval(createMusicNote, 500);

// Handle cursor/touch interactions
document.querySelector('.footer-slider-info').addEventListener('mousemove', (e) => {
    document.querySelectorAll('.music-note').forEach(note => {
        const rect = note.getBoundingClientRect();
        const dx = e.clientX - rect.left;
        const dy = e.clientY - rect.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) { // Adjust distance sensitivity as needed
            note.style.transform = `translate(${dx / 10}px, ${dy / 10}px)`;
        } else {
            note.style.transform = '';
        }
    });
});

document.querySelector('.footer-slider-info').addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    document.querySelectorAll('.music-note').forEach(note => {
        const rect = note.getBoundingClientRect();
        const dx = touch.clientX - rect.left;
        const dy = touch.clientY - rect.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            note.style.transform = `translate(${dx / 10}px, ${dy / 10}px)`;
        } else {
            note.style.transform = '';
        }
    });
});



// Define an array of strings to be displayed and erased
const textArray = [
  " - Hola chic@s!, Bienvenidos a esta gran aventura musical - ",
  " - Descarga nuestro e-Book GRATIS - ",
  " - Descubre la Trascendencia Filosófica de la Improvisación Musical - "
  // Add more strings as needed
];

// Initialize variables
let typeJsText = document.querySelector(".animatedText");
let stringIndex = 0; // Index of the current string in the array
let charIndex = 0; // Index of the current character in the current string
let isTyping = true; // Whether we are currently typing or erasing

function typeJs() {
  if (stringIndex < textArray.length) {
    // Check if there are more strings to display or erase
    const currentString = textArray[stringIndex];

    if (isTyping) {
      // Typing animation
      if (charIndex < currentString.length) {
        typeJsText.innerHTML += currentString.charAt(charIndex);
        charIndex++;
      } else {
        isTyping = false; // Switch to erasing mode
      }
    } else {
      // Erasing animation
      if (charIndex > 0) {
        typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
        charIndex--;
      } else {
        isTyping = true; // Switch back to typing mode
        stringIndex++; // Move to the next string

        if (stringIndex >= textArray.length) {
          stringIndex = 0; // Reset to the beginning of the array
        }

        charIndex = 0; // Reset character index
        typeJsText.innerHTML = ""; // Clear the content for the new string
      }
    }
  }
}

// Set an interval to call the typeJs function
setInterval(typeJs, 100); // You can adjust the animation speed as needed
