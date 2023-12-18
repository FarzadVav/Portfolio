import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

import supabase from "./createClient"

// --- Elements
const contact = document.querySelector('.contact')

// --- Functions
contact.addEventListener('submit', async (event) => {
  event.preventDefault()

  const reqBody = {
    number: '',
    email: '',
    message: ''
  }

  for (const elem of event.target.elements) {
    if (elem.name === 'number')
      reqBody.number = elem.value

    if (elem.name === 'email')
      reqBody.email = elem.value

    if (elem.name === 'message')
      reqBody.message = elem.value
  }

  let hasError = false
  for (const key in reqBody) {
    if (!reqBody[key].length) {
      hasError = true
    }
  }
  if (hasError) {
    return Toastify({
      text: 'Please complete fields :(',
      className: 'toast-error',
      duration: 2500,
      newWindow: true,
      close: true,
      gravity: 'center',
      position: 'center',
      stopOnFocus: true,
      offset: {
        y: 1
      }
    }).showToast()
  }

  await supabase.from('messages').insert([reqBody])
  contact.reset()
  Toastify({
    text: 'Your message Submitted successfully for me :)',
    className: 'toast',
    duration: 2500,
    newWindow: true,
    close: true,
    gravity: 'center',
    position: 'center',
    stopOnFocus: true,
    offset: {
      y: 1
    }
  }).showToast()
})