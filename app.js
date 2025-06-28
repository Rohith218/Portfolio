document.addEventListener("DOMContentLoaded",function(){
    const about = document.querySelector(".about");
    const home = document.querySelector(".home");
    if(about){
        about.addEventListener("click",function(e){
            window.scrollBy({
                top:570,
                left: 0,
                behavior: "smooth"
            });
        });
    }
    if(home){
        home.addEventListener("click",function(e){
            e.preventDefault();
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        });
    }
});