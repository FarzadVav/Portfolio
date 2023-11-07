  import addSkills from "./skills"

// --- Elements
const html = document.querySelector('html')
const toggle = document.querySelector('.header__theme-btn')

// --- States
const LIGHT = 'light'
const DARK = 'dark'
let theme = html.dataset.theme // 'light' or 'dark'

// --- Functions
const changeThemeHandler = () => {
  if (![LIGHT, DARK].includes(theme)) theme = LIGHT
  html.dataset.theme = theme
  localStorage.setItem('theme', theme)
  changeThemeToggleIcon()
}

const changeThemeToggleIcon = () => {
  if (theme === LIGHT) {
    toggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
        <path d="M6.343 17.657l-1.414 1.414" />
        <path d="M6.343 6.343l-1.414 -1.414" />
        <path d="M17.657 6.343l1.414 -1.414" />
        <path d="M17.657 17.657l1.414 1.414" />
        <path d="M4 12h-2" />
        <path d="M12 4v-2" />
        <path d="M20 12h2" />
        <path d="M12 20v2" />
      </svg>
    `
  } else {
    toggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="currentColor" />
      </svg>
    `
  }
}

// --- Events
toggle.addEventListener('click', () => {
  if (theme === LIGHT) theme = DARK
  else theme = LIGHT

  changeThemeHandler()
})

window.addEventListener('load', () => {
  addSkills()

  theme = localStorage.getItem('theme')
  changeThemeHandler()
})