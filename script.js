// Function to create hearts continuously
function createHearts() {
    var heartsContainer = document.getElementById("hearts");
    if (!heartsContainer) {
        console.error('Hearts container not found');
        return;
    }

    // Create a new heart image
    var heartImage = document.createElement('img');
    heartImage.src = 'https://media.tenor.com/ugUmlN1TcbgAAAAi/amor-heart.gif';
    heartImage.alt = 'Heart';
    heartImage.classList.add('heart'); // Optional: Add a class for additional styling if needed

    // Set random position for the heart
    var randomX = Math.random() * window.innerWidth;
    var randomY = Math.random() * window.innerHeight;
    heartImage.style.left = randomX + 'px';
    heartImage.style.top = randomY + 'px';

    heartsContainer.appendChild(heartImage);

    // Remove heart after 5 seconds (adjust as needed)
    setTimeout(function() {
        heartImage.remove();
    }, 5000);

    // Create another heart after a random interval (adjust as needed)
    var nextHeartTime = Math.random() * 300; // Random interval up to 300ms
    setTimeout(createHearts, nextHeartTime);
}

// Start creating hearts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createHearts();
});
