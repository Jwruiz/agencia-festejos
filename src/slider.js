const arrayImg = [
    './img/fiestanena-5.jpg',
    './img/fiestanena-3.jpg',
    './img/fiestanena-5.jpg'
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


