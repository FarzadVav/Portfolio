// --- Elements
const modal = document.querySelector('.modal')
const modalText = document.querySelector('.modal .text')

// --- State
let modalState = { show: false, text: '' }

// --- Functions
const setModalState = (show = false, text = '') => {
  modalState = { show, text }
  if (modalState.show) {
    modal.classList.add('active')
  } else {
    modal.classList.remove('active')
  }

  modalText.innerHTML = modalState.text
}

// --- Events
modal.addEventListener('click', event => {
  if (event.target.nodeName === 'SECTION') {
    modal.classList.remove('active')
  }
})

export default setModalState