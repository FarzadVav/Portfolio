import supabase from "./createClient"

// --- Elements
const wrapper = document.querySelector('.accordions')

// --- States
let accordions = []

// --- Functions
const addAccordions = () => {
  const fragment = document.createDocumentFragment()

  accordions.forEach((accordion, i) => {
    const liElem = document.createElement('li')
    liElem.className = 'accordions__item'

    const span = document.createElement('span')
    span.innerHTML = `# ${accordion.title}`

    const p = document.createElement('p')
    p.innerHTML = accordion.text
    if (i === 0) {
      p.classList.add('active')
    }

    span.addEventListener('click', () => p.classList.toggle('active'))

    liElem.append(span, p)
    fragment.appendChild(liElem)
  })

  wrapper.innerHTML = ''

  wrapper.appendChild(fragment)
}

// --- Events
window.addEventListener('load', async () => {
  const { data } = await supabase
    .from('accordions')
    .select('*')

  accordions = data
  addAccordions()
})