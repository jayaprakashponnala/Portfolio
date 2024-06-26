//   typing  Animation 
var typed  = new Typed(".typing",{
    strings:["FullStack  Developer","Web Developer","Backend Developer","Technical content Writer"],
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

 


 