import setModalState from "./modal"

// --- Elements
const wrapper = document.querySelector('.projects')

// --- Functions
const generateId = () => {
  const randomNumbers = () => Math.floor(Math.random() * Math.random())
  return `${randomNumbers()}-${randomNumbers()}-${randomNumbers()}-${randomNumbers()}`
}

// --- States
const projects = [
  { id: generateId(), img: '/images/project.jpg', name: 'JobVision-clone', link: 'www.sabzlearn.ir', github: 'https://github.com/FarzadVav/JobVision-clone', info: 'lorem 123' },
  { id: generateId(), img: '/images/project.jpg', name: 'JobVision-clone 2', link: 'www.sabzlearn.ir', github: 'https://github.com/FarzadVav/JobVision-clone', info: 'lorem 456' },
  { id: generateId(), img: '/images/project.jpg', name: 'JobVision-clone 3', link: 'www.sabzlearn.ir', github: 'https://github.com/FarzadVav/JobVision-clone', info: 'lorem 789' }
]

// Events
window.addEventListener('load', () => {
  const fragment = document.createDocumentFragment()

  projects.forEach(project => {
    const div = document.createElement('div')
    div.className = 'project__box'

    const img = document.createElement('img')
    img.setAttribute('src', project.img)
    img.setAttribute('alt', project.name)

    const span = document.createElement('span')
    span.innerHTML = project.name

    const ul = document.createElement('ul')
    ul.innerHTML = `
      <li>
        <a class="btn btn-primary" href="${project.link}">
          view
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
          </svg>
        </a>
        </li>
        <li>
        <a class="btn btn-primary" href="${project.github}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
      </li>
    `

    const li = document.createElement('li')
    li.innerHTML = `
      <button class="btn btn-ghust">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
          stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      </button>
    `
    li.addEventListener('click', () => setModalState(true, project.info))

    ul.appendChild(li)
    div.append(img, span, ul)

    fragment.appendChild(div)
  })

  wrapper.innerHTML = ''

  wrapper.appendChild(fragment)
})

function test() { console.log(123) }