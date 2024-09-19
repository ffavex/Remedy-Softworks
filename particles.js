<script>
    const particleContainer = document.getElementById('particle-container');

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particleContainer.appendChild(particle);

        // Animate particle
        setTimeout(() => {
            particle.style.opacity = 1; // Fade in
        }, 10);

        // Remove particle after animation
        setTimeout(() => {
            particle.style.opacity = 0; // Fade out
            setTimeout(() => {
                particleContainer.removeChild(particle); // Remove from DOM
            }, 300);
        }, 300);
    }

    document.addEventListener('mousemove', (event) => {
        createParticle(event.clientX, event.clientY);
    });
</script>
