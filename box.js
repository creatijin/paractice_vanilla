var box_number = 0;
var num = document.querySelector('.num');
var left_btn = document.querySelector('.btn.left');
var right_btn = document.querySelector('.btn.right');


function onleft (){
    box_number++;

    if (box_number === 6) {
        box_number = 1;
        num.innerHTML = box_number;
    } else {
        num.innerHTML = box_number;
    }
};
function onright (){
    box_number--;

    if (box_number === 0) {
        box_number = 5;
        num.innerHTML = box_number;
    }else if (box_number === -1 ) {
        box_number = 5;
    } else {
        num.innerHTML = box_number;
    }
};