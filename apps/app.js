const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveRight() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.7s";
  setTimeout (function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}
btnRight.addEventListener('click', function(){
  moveRight();
});
function moveLeft() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.7s";
  setTimeout (function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}
btnLeft.addEventListener('click', function(){
  moveLeft();
});

setInterval(function() {
  moveRight();
},5000);

let menu_icon_box = document.querySelector(".menu_icon_box");
let box = document.querySelector(".box");

menu_icon_box.onclick = function(){
  menu_icon_box.classList.toggle("active");
  box.classList.toggle("active");
}

document.onclick = function(e){
  if(!menu_icon_box.contains(e.target) && !box.contains(e.target)){
    menu_icon_box.classList.remove("active");
    box.classList.remove("active");
  }
}

