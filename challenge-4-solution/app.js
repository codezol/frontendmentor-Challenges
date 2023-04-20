const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const colseMenu = document.querySelector('.close-menu')
const darker    = document.querySelector('.darker')

menu.addEventListener('click', () => {
    nav.style.display = 'block'
    darker.style.display = 'block'
})
colseMenu.addEventListener('click', () => {
    nav.style.display = 'none';
    darker.style.display = 'none'
})