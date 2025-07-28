// Show the back button when the user scrolls down a bit (optional)
let prevButton = document.getElementById("prev_button");

window.scroll = () => {
    scrollFunction();
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
} else {
    backButton.style.display = "none";
}
}

// Take the user to the previous page
function goBack() {
    window.history.back();
}




