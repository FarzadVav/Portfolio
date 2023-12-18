import supabase from "./createClient"

// --- Elements
const wrapper = document.querySelector('.header__socials')
const wrapper_2 = document.querySelector('.footer__socials')

// --- States
let socials = []

// --- Functions
const addSocials = () => {
  const fragment = document.createDocumentFragment()
  const fragment_2 = document.createDocumentFragment()

  socials.forEach(social => {
    const liElem = document.createElement('li')

    const a = document.createElement('a')
    a.className = 'btn btn-text-ghust'
    a.innerHTML = social.svg
    a.setAttribute('href', social.link)
    a.setAttribute('title', social.name)
    a.setAttribute('target', '_blank')

    liElem.appendChild(a)
    fragment.appendChild(liElem)
    fragment_2.appendChild(liElem)
  })

  wrapper.innerHTML = ''
  wrapper_2.innerHTML = ''

  wrapper.appendChild(fragment)
  wrapper_2.appendChild(fragment_2)
}

// --- Events
window.addEventListener('load', async () => {
  const { data } = await supabase
    .from('socialMedias')
    .select('*')

  socials = data
  addSocials()
})