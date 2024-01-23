const arrayImg = [
    './img/slider-1.JPG',
    './img/slider-2.jpg',
    './img/slider-3.jpg',
    './img/slider-4.jpg',
    './img/slider-5.jpg',
    './img/slider-6.jpg',
    './img/slider-7.jpg', 
    './img/slider-8.jpg',
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




