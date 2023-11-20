const arrayImg = [
    './img/fc-gold.jpeg',
    './img/fc-rosa.jpeg',
    './img/happyB.jpeg',
    './img/fd.jpeg',
    './img/felizA.jpeg',
    './img/fd-pink.jpeg',
    './img/HB-green.jpeg', 
];

const img = document.querySelector('#slide');
let i = 0;

const slideShow = () => {
    img.src = arrayImg[i]
    i = (i < arrayImg.length -1)? i+1 : 0
};

const interval = () => {
    setInterval(slideShow, 1000)
}



    /* document.addEventListener('click', (e) => {
        openNav()
        e.preventDefault
    }) */
