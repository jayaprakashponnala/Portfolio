//   typing  Animation 
var typed  = new Typed(".typing",{
    strings:["FullStack  Developer","Web Developer","Backend Developer"],
    typeSpeed:50,
    backSpeed: 50,
    startDelay:1000,
    loop:true
}) 

 // Add an event listener for all anchor tags inside the nav
 document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove the "active" class from all links
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        // Add the "active" class to the clicked link
        this.classList.add('active');
    });
});


//  For Toggle button

// JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-btn');
    const navMenu = document.querySelector('.nav-menu');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        toggleButton.classList.toggle('open');
    });

    // Close the menu when a menu item is clicked (optional)
    navMenu.querySelectorAll('a').forEach(function(item) {
        item.addEventListener('click', function() {
            navMenu.classList.remove('open');
            toggleButton.classList.remove('open');
        });
    });
});
console.log('JavaScript code executed');


 


 