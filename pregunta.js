document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll('.btn.option');
    const message = document.getElementById('message');
    const scoreDisplay = document.getElementById('score');
    const nextBtn = document.getElementById('nextBtn');
    let score = parseInt(localStorage.getItem('score')) || 0;

    scoreDisplay.textContent = `Puntos: ${score}`;

    options.forEach(option => {
        option.addEventListener('click', () => {
            if (!option.classList.contains('disabled')) {
                if (option.getAttribute('data-answer') === 'correct') {
                    showMessage('¡Correcto! ¡Felicitaciones!', 'correct');
                    score++;
                } else {
                    showMessage('Respuesta incorrecta. Inténtalo de nuevo.', 'incorrect');
                    score--;
                }
                scoreDisplay.textContent = `Puntos: ${score}`;
                localStorage.setItem('score', score);

                // Desactivar todos los botones después de seleccionar una respuesta
                options.forEach(button => {
                    button.classList.add('disabled');
                });

                // Mostrar el botón "Siguiente Pregunta" después de responder
                nextBtn.style.display = 'block';
            }
        });
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.className = 'message ' + type;
        message.style.opacity = 1;

        setTimeout(() => {
            message.style.opacity = 0;
        }, 3000);
    }

    // Función para guardar la respuesta seleccionada en el almacenamiento local
    function saveAnswer(questionNumber, answer) {
        localStorage.setItem(`respuesta${questionNumber}`, answer);
    }
});

// Función para guardar la respuesta escrita en la pregunta 10
function saveWrittenAnswer(answer) {
    localStorage.setItem('respuesta10', answer);
}
