import supabase from "./createClient"

// --- Elements
const inUse_wrapper = document.querySelector('.in-use')
const learning_wrapper = document.querySelector('.learning')

// --- States
const inUse_skills = []
const learning_skills = []

// --- Functions
const addSkills = () => {
  const inUse_fragment = document.createDocumentFragment()
  const learning_fragment = document.createDocumentFragment()

  inUse_skills.forEach(skill => {
    const div = document.createElement('div')
    div.className = 'skill-box'
    div.style.color = `#${skill.color}`
    div.innerHTML = `<span>${skill.name}</span>`
    inUse_fragment.appendChild(div)
  })

  learning_skills.forEach(skill => {
    const div = document.createElement('div')
    div.className = 'skill-box'
    div.style.color = `#${skill.color}`
    div.innerHTML = `<span>${skill.name}</span>`
    learning_fragment.appendChild(div)
  })

  inUse_wrapper.innerHTML = ''
  inUse_wrapper.appendChild(inUse_fragment)

  learning_wrapper.innerHTML = ''
  learning_wrapper.appendChild(learning_fragment)
}

// Events
window.addEventListener('load', async () => {
  const { data } = await supabase
    .from('skills')
    .select('*')

  data.forEach(skill => {
    if (skill.inLearning) {
      learning_skills.push(skill)
    } else {
      inUse_skills.push(skill)
    }
  })
  addSkills()
})