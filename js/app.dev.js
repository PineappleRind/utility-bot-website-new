"use strict";

function $(id) {
    return document.querySelector(id)
}

let o = $('#overlay');

onload = () => {
    o.style.opacity = '0'
    setTimeout(function(){
        o.style.display = 'none';
    },400)
}
let r = $("#mobileNav");
function openNav() {
    r.classList.toggle("is-open");
    r.classList.toggle("is-closed")
}
 
$('.menu').addEventListener("click", function(e) {
    openNav();
});
