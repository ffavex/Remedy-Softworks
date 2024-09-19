const texts = [
    "Remedy #1",
    "vzexi & valorized owns ts",
    "Controlling Arsenal, Rivals, & Roblox : Since 2021",
    "A New Era.. Remedy"
];

let index = 0;
let charIndex = 0;
const speed = 50; // Typing speed
const backspaceSpeed = 50; // Backspacing speed
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < texts[index].length) {
        typewriterElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(backspace, 1000); // Wait before starting backspace
    }
}

function backspace() {
    if (charIndex > 0) {
        typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(backspace, backspaceSpeed);
    } else {
        index = (index + 1) % texts.length; // Move to the next text
        setTimeout(type, 500); // Wait before typing the next text
    }
}

// Start the typewriter effect
type();
