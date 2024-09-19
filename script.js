const overlay = document.getElementById('overlay');
const content = document.getElementById('content');
const audio = new Audio('ss.mp3'); // Ensure the path is correct

overlay.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide the overlay
    content.style.display = 'block'; // Show the main content
    audio.play().catch(error => {
        console.error("Audio playback failed:", error);
    }); // Play the music
});
