const enterBtn = document.querySelector('.enter')
const eventOffice = document.querySelector('.event-office')
const toggleBtn = document.querySelector('.toggler')
const navbarBackground = document.querySelector('.navbar-container')
const navbarItems = document.querySelector('.navbar-items')

enterBtn.addEventListener('click', () => {
    eventOffice.classList.add('active')
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
