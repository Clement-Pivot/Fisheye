export function displayModal () {
  document.querySelector('main').setAttribute('aria-hidden', 'true')
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  document.querySelectorAll('.focusable').forEach(e => {
    e.setAttribute('tabindex', -1)
  })
  modal.querySelector('input').focus()
}

export function closeModal () {
  document.querySelector('main').removeAttribute('aria-hidden')
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  document.querySelectorAll('.focusable').forEach(e => {
    e.setAttribute('tabindex', 0)
  })
}

export function submitModal () {
  const $modal = document.getElementById('contact_modal')
  $modal.querySelectorAll('input').forEach(input => {
    console.log(input.value)
    input.value = ''
  })
  console.log($modal.querySelector('textarea').value)
  $modal.querySelector('textarea').value = ''
  closeModal()
}

export function initModal (photographer) {
  const $modal = document.querySelector('.modal')
  $modal.querySelector('.name').textContent = photographer.name
  $modal.querySelector('.contact_button').addEventListener('click', e => {
    e.preventDefault()
    submitModal()
  })
  $modal.querySelector('.modal-close').addEventListener('click', e => {
    closeModal()
  })
}
