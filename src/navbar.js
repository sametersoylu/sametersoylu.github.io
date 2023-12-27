let loadnavbar = $(function(){
    var filename = "src/navbar.html"
    $("#navbar").load(filename);
});


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        var linkel = document.getElementsByClassName("nav-link");
        for(let i = 0; i < linkel.length; i++) {
            if(linkel[i].href === window.location.href) {
                linkel[i].classList.add("active");
            }
        }  
    }, 100);
});

