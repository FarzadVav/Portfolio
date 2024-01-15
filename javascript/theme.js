// --- Elements
const html = document.querySelector('html')
const toggle = document.querySelector('.header__theme-btn')

// --- States
const LIGHT = 'light'
const DARK = 'dark'
let theme = DARK // 'light' or 'dark'

// --- Functions
const changeThemeHandler = () => {
  if (![LIGHT, DARK].includes(theme)) theme = LIGHT
  html.dataset.theme = theme
  localStorage.setItem('theme', theme)
  changeThemeToggleIcon()
}

const changeThemeToggleIcon = () => {
  if (theme === LIGHT) {
    toggle.classList.remove('active')
  } else {
    toggle.classList.add('active')
  }
}

// --- Events
window.addEventListener('load', () => {
  theme = localStorage.getItem('theme')
  changeThemeHandler()
})

toggle.addEventListener('click', () => {
  if (theme === LIGHT) theme = DARK
  else theme = LIGHT

  changeThemeHandler()
})