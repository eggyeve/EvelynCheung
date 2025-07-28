window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.navbar-button');
  const hoverSound = document.getElementById('click_sound');
const clickSound = document.getElementById("click_sound_2");

  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      hoverSound.currentTime = 0; // rewind to start
    //   hoverSound.play();
    });
  });
});

const dropdown_menu = document.getElementById("menu");
const project_dropdown_menu = document.getElementById("project_menu_button");

var menu_option = "none";
var project_menu_option = "none";

const toggleMenu = () => {
  if (menu_option === "none") {
    menu_option = "grid";
  } else {
    menu_option = "none";
  }
  dropdown_menu.style.display = menu_option;
}

const toggleProjectMenu = () => {
  if (project_menu_option === "none") {
    project_menu_option = "grid";
  } else {
    project_menu_option = "none";
  }
  project_dropdown_menu.style.display = project_menu_option;
}

let mybutton = document.getElementById("back_to_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let mybutton = document.getElementById("back_button");

// Show the back button when the user scrolls down a bit (optional)
  window.onscroll = function() {
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