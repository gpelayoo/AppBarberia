// Navbar

function openNav(){
    document.getElementById("mobile_menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile_menu").style.width = "0%";
}

//Navbar

//Slider

let btn_left = document.querySelector(".btn_left");
let btn_right = document.querySelector(".btn_right");
let sliders = document.querySelector(".sliders");
let slider_section = document.querySelectorAll(".slider_section");

let operation = 0;
let widthImg = 100 / slider_section.length;
let counter = 0;


function moveToRight(){
    if(counter >= slider_section.length-1){
        counter = 0;
        operation = 0;
        sliders.style.transform = `translate(-${operation}%)`;
        sliders.style.transition = "none";
        return;
    }

    counter++;

    operation = operation + widthImg;
    sliders.style.transform = `translate(-${operation}%)`;
    sliders.style.transition = "all ease 0.6s";
    
    
}

function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = slider_section.length-1;
        operation = widthImg * (slider_section.length-1);
        sliders.style.transform = `translate(-${operation}%)`;
        sliders.style.transition = "none";
        return;
    }

    operation = operation - widthImg;
    sliders.style.transform = `translate(-${operation}%)`;
    sliders.style.transition = "all ease 0.6s"; 
    
}

btn_left.addEventListener("click", e=> moveToLeft());
btn_right.addEventListener("click", e=> moveToRight());

setInterval(()=>{
    moveToRight();
},3000);


//Slider




