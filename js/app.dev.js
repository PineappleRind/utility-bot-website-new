"use strict";

function $(id) {
    return document.querySelector(id)
}

let o = $('#overlay');

onload = () => {
    o.style.opacity = '0'
    setTimeout(function(){
        o.style.display = 'none';
    },200)
}
let r = $("#mobileNav");
function openNav() {
    r.classList.toggle("is-open");
    r.classList.toggle("is-closed");
}

function openOverlay(o) {
    setTimeout(() => {
        o.style.opacity = '0.8';
    },10)
    o.style.display = 'block'
}

function closeOverlay(o) {
    setTimeout(() => {
        o.style.display = 'none'
    },200)
    o.style.opacity = '0';
}
 
$('.menu').addEventListener("click", function(e) {
    openNav();
    openOverlay($('#navOverlay'));
});

$('#close').addEventListener("click", function(e) {
    openNav();
    closeOverlay($('#navOverlay'));
});
