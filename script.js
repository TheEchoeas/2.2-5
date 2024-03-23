let menu = document.querySelector("header ul");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle("show-menu");
});

window.addEventListener('resize', function(){
    if (this.window.innerWidth > 375 && menu.classList.contains('show-menu')){
        menu.classList.remove('show-menu');
    }
});