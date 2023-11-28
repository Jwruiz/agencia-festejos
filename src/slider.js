const arrayImg = [
    './img/DS-1.jpg',
    './img/DS-2.jpeg',
    './img/DS-3.jpeg',
    './img/DS-4.jpeg',
    './img/DS-5.jpeg',
    './img/DS-6.jpeg',
    './img/DS-7.jpeg', 
    './img/D-cover.jpg',
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




