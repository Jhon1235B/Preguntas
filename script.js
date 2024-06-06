document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById('noBtn');

    noBtn.addEventListener('mouseenter', moveButton);
    noBtn.addEventListener('click', moveButton);

    function moveButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
});
