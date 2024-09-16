const typewriterElement = document.querySelector('.typewriter');
const words = ['La Guitarra Acustica', 'El Requinto', 'La Guitarra Electrica', 'El Ukelele', 'El Bajo'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50;
let deletingSpeed = 25;
let pauseBetweenWords = 1000;

function type() {
    if (charIndex < words[wordIndex].length && !isDeleting) {
        typewriterElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        typewriterElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, deletingSpeed);
    } else {
        isDeleting = !isDeleting;

        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, pauseBetweenWords);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
