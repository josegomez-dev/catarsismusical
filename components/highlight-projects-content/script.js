const textArrays = {
  section1: [
    "GRABACIÓN & PRODUCCIÓN MUSICAL.",
    "ARTE AUDIOVISUAL.",
    // Add more strings as needed for section 1
  ],
  section2: [
    "CONVERTETE EN UN MUSICO 2.0",
    "RECURSOS DIGITALES E INTERACTIVOS",
    // Add more strings as needed for section 2
  ],
  section3: [
    "VIDEO JUEGOS PLATFORMA 2D",
    "JUEGOS DE MESA",
    "TELEGRAM APPS WEB 3.0",
    "ANIMACIÓN & EFECTOS ESPECIALES",
    // Add more strings as needed for section 3
  ]
};

// Function to create typing and erasing animation for each section
function typeJs(sectionId) {
  const textArray = textArrays[sectionId];
  const element = document.getElementById(sectionId);
  let stringIndex = 0; // Index of the current string in the array
  let charIndex = 0; // Index of the current character in the current string
  let isTyping = true; // Whether we are currently typing or erasing

  function type() {
    if (stringIndex < textArray.length) {
      const currentString = textArray[stringIndex];

      if (isTyping) {
        // Typing animation
        if (charIndex < currentString.length) {
          element.innerHTML += currentString.charAt(charIndex);
          charIndex++;
        } else {
          isTyping = false; // Switch to erasing mode
        }
      } else {
        // Erasing animation
        if (charIndex > 0) {
          element.innerHTML = currentString.substring(0, charIndex - 1);
          charIndex--;
        } else {
          isTyping = true; // Switch back to typing mode
          stringIndex++; // Move to the next string
          if (stringIndex >= textArray.length) {
            stringIndex = 0; // Reset to the beginning of the array
          }
          charIndex = 0; // Reset character index
          element.innerHTML = ""; // Clear the content for the new string
        }
      }
    }
  }

  // Start the typing animation with a set interval for this section
  setInterval(type, 100); // Adjust the speed as needed
}

// Call the function for each section by ID
typeJs("section1");
typeJs("section2");
typeJs("section3");
