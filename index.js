// https://github.com/uplifters/uplifters.github.io

// https://www.css-gradient.com/
// https://cssgradient.io/gradient-backgrounds/
// https://purple11.com/complementary-colors/
// carousel code by Andrew Zamora, tweaked a bit

const {log}= console
const millis = 5000
let interval = setInterval(changeImage, millis)


const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


const pictures = Array.from(document.querySelectorAll('img.slideshow-img')).map(img => img.src) // picURLs
img.src = pictures[0];
let position = 0;

const moveRight = () => {

    clearInterval(interval)

    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {

    clearInterval(interval)

    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

function changeImage(){

    position++;
    if (position >= pictures.length) position = 0

    img.src = pictures[position]
}

document.addEventListener('DOMContentLoaded', async ev =>{

    // const url = 'http://localhost:7001/log-uplifters?x=test'
    const url = 'https://www.library-on-mars.com/log-uplifters'
    fetch( url, {
        method: 'POST'
    })
})