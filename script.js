function showHearts(event) {
    var heartsContainer = document.getElementById("hearts");
    if (!heartsContainer) {
        console.error('Hearts container not found');
        return;
    }

    var heartImage = document.createElement('img');
    heartImage.src = 'https://media.tenor.com/ugUmlN1TcbgAAAAi/amor-heart.gif';
    heartImage.alt = 'Heart';
    heartImage.classList.add('heart'); // Add a class for additional styling if needed

    // Set heart position based on click event coordinates
    heartImage.style.left = event.clientX + 'px';
    heartImage.style.top = event.clientY + 'px';

    heartsContainer.appendChild(heartImage);

    // Remove heart after 3 seconds (adjust as needed)
    setTimeout(function() {
        heartImage.remove();
    }, 3000);
}
