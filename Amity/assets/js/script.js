// Define an array of image URLs
const imageUrls = [
    "https://images.unsplash.com/photo-1641697633078-d756dac7dea7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1648221231735-d2da7afed3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80",
    "https://images.unsplash.com/photo-1648221231877-0eec638caf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
];

// Get a random image URL from the array
const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

// Set the background image of the section element to the random image URL
document.getElementById("random-image-section").style.backgroundImage = `url(${randomImageUrl})`;

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleControls');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Adjust the interval between slides (in milliseconds)
    });
});