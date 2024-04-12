const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// popup
const popupBtn = document.querySelector('.popup-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');

popupBtn.addEventListener('click', function() {
  popupOverlay.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  popupOverlay.style.display = 'none';
});