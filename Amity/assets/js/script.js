// Define an array of image URLs
const imageUrls = [
    "https://images.unsplash.com/photo-1495660611116-fdd372baad4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1660638986113-c6da7ff96cca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
    "https://images.unsplash.com/photo-1648221231735-d2da7afed3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
];

// Get a random image URL from the array
const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

// Set the background image of the section element to the random image URL
document.getElementById("random-image-section").style.backgroundImage = `url(${randomImageUrl})`;

<script>
        // Set the scroll interval to 3 seconds
    setInterval(function () {
            // Get the wrapper div
            var wrapper = document.querySelector('.wrapper');
    // Scroll the wrapper to the right by the width of one listing box
    wrapper.scrollBy({left: 280, behavior: 'smooth' });
        }, 3000);
</script>