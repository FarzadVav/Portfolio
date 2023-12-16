// --- Elements
const accordions = document.querySelectorAll('.details__item')

// Functions
accordions.forEach(acc => {
  acc.querySelector('span').addEventListener('click', () => acc.querySelector('p').classList.toggle('active'))
})