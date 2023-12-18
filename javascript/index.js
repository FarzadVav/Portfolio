import supabase from "./createClient"

// --- Elements
const phone = document.querySelector('.hero-section__phone a')
const email = document.querySelector('.hero-section__email a')
const about = document.querySelector('.about .text')
const cv = document.querySelector('.about a')

// --- States
let content = {}

// --- Functions
const addContent = () => {
  phone.innerHTML = content.phone
  phone.setAttribute('href', `tel:${content.phone}`)

  email.innerHTML = content.email
  email.setAttribute('href', `mailto:${content.email}`)
  email.setAttribute('target', '_blank')

  about.innerHTML = content.about
  cv.setAttribute('href', content.cv)
}

// --- Events
window.addEventListener('load', async () => {
  const { data } = await supabase
    .from('content')
    .select('*')

  content = data[0]
  addContent()
})