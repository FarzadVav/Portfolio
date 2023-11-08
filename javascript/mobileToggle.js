// --- Elements
const toggleBtn = document.querySelector('.header__mobile-menu-btn')
const dropDown = document.querySelector('.header__mobile-menu-btn ul')

// --- Functions
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active-menu')
})