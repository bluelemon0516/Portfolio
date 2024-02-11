const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = `url("./img/${chosenImage}")`
document.documentElement.style.backgroundImage = backgroundImage;