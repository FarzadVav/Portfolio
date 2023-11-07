// --- Elements
const inUse_wrapper = document.querySelector('.in-use')
const learning_wrapper = document.querySelector('.learning')

// --- States
const inUse_skills = [
  { name: 'html', color: 'E5532D' },
  { name: 'css', color: '088DCC' },
  { name: 'javascript', color: 'F7E025' },
  { name: 'react', color: '65DBFB' },
  { name: 'typescript', color: '377CC8' },
  { name: 'react-query', color: 'FF4759' },
  { name: 'swr', color: '65DBFB' },
  { name: 'axios', color: '5F2FE5' },
  { name: 'tailwind', color: '1DC0CD' },
  { name: 'bootstrap', color: '8F1BFC' },
  { name: 'sass', color: 'CE6B9C' },
  { name: 'react-hook-form', color: 'ED5F93' },
  { name: 'zod', color: '2E5386' },
  { name: 'material-ui', color: '0883FF' },
  { name: 'framer-motion', color: '7B69E3' },
  { name: 'figma', color: 'FF7566' },
  { name: 'git', color: 'FFFFFF' }
]

const learning_skills = [
  { name: 'jest', color: 'FF5F64' },
  { name: 'next', color: 'FFFFFF' },
  { name: 'pwa', color: '0AC958' },
]

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

export default addSkills
