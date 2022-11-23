"use strict";
let btnItem = document.querySelectorAll(".btn-item"),
    colorVal = document.querySelector("#color-input"),
    changeBtn = document.querySelector(".changeBtn"),
    select = document.querySelector('#selectList');

select.addEventListener('change', ()=>{
});
changeBtn.addEventListener('click', () => {
    btnItem[select.selectedIndex].style.background = colorVal.value;

})