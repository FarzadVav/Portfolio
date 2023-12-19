// --- Elements
const toggleBtn = document.querySelector('.header__mobile-menu-btn')
const menu = document.querySelector('.mobile-menu')
const menuLinks = document.querySelectorAll('.mobile-menu a')

// --- Functions
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('active')
    menu.classList.remove('active')
  })
})

// --- Evnts
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')
  menu.classList.toggle('active')
})