const bars = document.getElementById('menu-icon');
const resMenu = document.getElementById('resMenu');
const xmark = document.getElementById('xmark-icon');


bars.addEventListener('click', function () {
    resMenu.style.width = '100%'
})

xmark.addEventListener('click', function () {
    resMenu.style.width = '0%'
})

resMenu.addEventListener('click', function () {
    resMenu.style.width = '0%'
})