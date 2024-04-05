// applying locomitve 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function pageAnimation(){
    var elemContainer = document.querySelector("#elem-container");
    var fixedImage = document.querySelector("#fixed-image");

    // displaying of the fixd image when mouse is hovered in elem-container
    elemContainer.addEventListener("mouseover", function(){
        fixedImage.style.display = "block";
    });

    // displaying of the fixed image stopped when mouse is moved from the elem-container
    elemContainer.addEventListener("mouseleave", function(){
        fixedImage.style.display = "none";
    });

    // fetching the images with foreach and queryselectorALl
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter", function(){
        var image = ele.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`
        })
    })
}

pageAnimation();

// hamburger-menu
var hamMenu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navImage = document.querySelector("nav img");
var flag = 0;

hamMenu.addEventListener("click", function(){
    if(flag == 0){
        full.style.top = "0";
        navImage.style.opacity = "0";
        flag = 1;
    }else {
        full.style.top = "-100%";
        navImage.style.opacity = "1";
        flag = 0;
    }
});
