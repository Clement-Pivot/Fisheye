export function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  document.querySelectorAll('.focusable').forEach(e => {
    e.setAttribute('tabindex', -1)
  })
}

export function closeModal () {
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
