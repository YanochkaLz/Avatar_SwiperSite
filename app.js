new Swiper('.slider', {
    speed: 5000,
    mousewheel: {
        enabled: true,
        sensivity: 3
    },
    spaceBetween: 30,
    parallax: true,
    // freeMode: true,
});

const spirit = document.querySelector('.spirit');
const button = document.querySelector('.title-avatar');
const menu = document.querySelector('.menu');
const button1 = document.querySelector('.t-av');
const container = document.querySelector('.container');
const swiper = document.querySelector('.swiper');

let game = setInterval(MoveSpirit, 1);
let game2;

let topY = 0;
let leftX = 0;
let rotate = 0;
let queu = 1;
let scale = 1;
let scaleC = 1;
let checkVis = false;

button.onclick = () => {
    clearInterval(game);
    spirit.setAttribute('style', `top: 200px; left:400px; transform:rotate(0deg); visibility: hidden;}`);
    button.removeChild(button1);
    game2 = setTimeout(StartSpirit, 1000);

}

function StartSpirit() {
    button.setAttribute('style', `scale: ${scale};`);
    container.setAttribute('style', `scale: ${scaleC};`);
    scale += .05;
    scaleC += .005;
    if (scale > 7) {
        clearInterval(game2);
        swiper.classList.toggle('hidvis');
        menu.classList.toggle('hidvis2');
    }
    else {
        requestAnimationFrame(StartSpirit);
    }
}

function MoveSpirit() {
    spirit.setAttribute('style', `top: ${topY}px; left:${leftX}px; transform:rotate(${rotate}deg);}`);

    if (queu == 1) {
        topY += 1.4;
        leftX -= 0.8;
        rotate -= 0.02;
        if (topY > 420) {
            queu += 1;
        }
    }
    else if (queu == 2) {
        topY += 0.6;
        leftX += 2;
        if (topY > 600) {
            queu += 1;
        }
    }

    else if (queu == 3) {
        topY -= 2;
        leftX += 1.4;
        if (leftX > 1000) {
            queu += 1;
        }
        rotate -= 0.02;
    }

    else if (queu == 4) {
        topY += 1.4;
        leftX += 0.4;
        rotate += 0.04;
        if (topY > 420) {
            queu += 1;
        }
    }

    else if (queu == 5) {
        topY += 0.4;
        leftX -= 1.2;
        rotate += 0.01;
        if (topY > 500) {
            queu += 1;
        }
    }

    else if (queu == 6) {
        topY -= 0.8;
        leftX -= 1.2;
        rotate -= 0.01;
        if (leftX <= 0 && topY <= 0) {
            queu = 1;
            topY = 0;
            leftX = 0;
            rotate = 0;
        }
    }
}


