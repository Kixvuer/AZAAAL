function showHearts(event) {
    console.log('Clicked at:', event.pageX, event.pageY);

    var heartsContainer = document.getElementById("hearts");
    if (!heartsContainer) {
        console.error('Hearts container not found');
        return;
    }

    var heartImage = document.createElement('img');
    heartImage.src = 'https://media.tenor.com/ugUmlN1TcbgAAAAi/amor-heart.gif';
    heartImage.alt = 'Heart';
    heartImage.style.position = 'absolute';
    heartImage.style.left = event.pageX + 'px';
    heartImage.style.top = event.pageY + 'px';
    
    console.log('Heart position:', heartImage.style.left, heartImage.style.top);

    heartsContainer.appendChild(heartImage);

    setTimeout(function() {
        heartImage.remove();
    }, 3000);
}
