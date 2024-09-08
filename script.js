window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');
    const boxes = document.querySelectorAll('.color');
    const round = document.querySelector('.round'); 
    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    boxes.forEach((box, i) => {
        box.addEventListener('click', function() {
            sounds[i].currentTime = 0; 
            sounds[i].play(); 
            createBubble(i); 
        });
    });

    const createBubble = (i) => {
        const bubble = document.createElement('div');
        round.appendChild(bubble); 
        bubble.style.backgroundColor = color[i]; 
        bubble.style.animation = 'jump 1s ease'; 
        bubble.classList.add('bubble'); 

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    };
});
