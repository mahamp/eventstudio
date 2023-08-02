const enterBtn = document.querySelector('.enter')
const eventPart = document.querySelector('.event')
const officePart = document.querySelector('.office')
const toggleBtn = document.querySelector('.toggler')
const navbarBackground = document.querySelector('.navbar-container')
const navbarItems = document.querySelector('.navbar-items')
const fadeOutBtn = document.querySelector('.fade-out__btn')
const fadeOutHr = document.querySelector('.fade-out__hr')

enterBtn.addEventListener('click', () => {
    eventPart.classList.add('active-left')
})

enterBtn.addEventListener('click', () => {
    officePart.classList.add('active-right')
})
enterBtn.addEventListener('click', () => {
    fadeOutBtn.classList.add('fade-out-active')
})

enterBtn.addEventListener('click', () => {
    fadeOutHr.classList.add('fade-out-active')
})

enterBtn.addEventListener('click', () => {
    setTimeout (function () {
        toggleBtn.classList.add('btnactive');
    } ,3000); 
})
enterBtn.addEventListener('click', () => {
    setTimeout (function () {
        navbarBackground.classList.add('nav-boarder');
    } ,800); 
})
enterBtn.addEventListener('click', () => {
    setTimeout (function () {
        navbarItems.classList.add('nav-items');
    } ,1700); 
})
