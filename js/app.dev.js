"use strict";

function $(e) {
    return document.querySelector(e)
}
let o = $("#overlay");
onload = (() => {
    o.style.opacity = "0", setTimeout(function() {
        o.style.display = "none"
    }, 200)
});
let r = $("#mobileNav");

function openNav() {
    r.classList.toggle("is-open"), r.classList.toggle("is-closed")
}

function openOverlay(e) {
    setTimeout(() => {
        e.style.opacity = "0.8"
    }, 10), e.style.display = "block"
}

function closeOverlay(e) {
    setTimeout(() => {
        e.style.display = "none"
    }, 700), e.style.opacity = "0"
}
$(".menu").addEventListener("click", function(e) {
    openNav(), openOverlay($("#navOverlay"))
}), $("#close").addEventListener("click", function(e) {
    openNav(), closeOverlay($("#navOverlay"))
});