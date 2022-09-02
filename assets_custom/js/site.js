document.addEventListener('DOMContentLoaded', function () {
    typeWriter();
}, false);

for (arrowdown of document.querySelectorAll(".arrow-down")) {
    arrowdown.addEventListener('click', function () {
        let rotation = this.dataset.rotation;
        switch (rotation) {
            case "1":
                this.style.transform = 'rotate(0deg)';
            break;
            case "2":
                this.style.transform = 'rotate(90deg)';
            break;
            case "3":
                this.style.transform = 'rotate(180deg)';
            break;
            case "4":
                this.style.transform = 'rotate(270deg)';
                rotation = 0;
            break;
        
            default:
                break;
        }
        rotation++;
        this.setAttribute('data-rotation', rotation);
    });
}

let i = 0;
let txt = 'Hi, this is a mockup page made for Alonso with Bootstrap 5!';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}