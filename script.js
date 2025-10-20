'use strict';

let belenCount = parseInt(localStorage.getItem("belenCount")) || 0;
let alexCount = parseInt(localStorage.getItem("alexCount")) || 0;

const belenDisplay = document.querySelector('#belen-count');
const alexDisplay = document.querySelector('#alex-count');
const belenBtn = document.querySelector('#belen-btn');
const alexBtn = document.querySelector('#alex-btn');

belenDisplay.textContent = belenCount;
alexDisplay.textContent = alexCount;

belenBtn.addEventListener('click', ()=>{
    belenCount ++;
    belenDisplay.textContent = belenCount;
    localStorage.setItem("belenCount", belenCount);
    animateCount(belenDisplay);
});

alexBtn.addEventListener('click', ()=>{
    alexCount ++;
    alexDisplay.textContent = alexCount;
    localStorage.setItem("alexCount", alexCount);
    animateCount(alexDisplay);
});

function animateCount(element) {
  element.style.transform = "scale(1.4)";
  element.style.transition = "transform 0.2s";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 200);
}