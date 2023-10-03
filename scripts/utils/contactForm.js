// eslint-disable-next-line no-unused-vars
function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  document.querySelectorAll('.focusable').forEach(e => {
    e.setAttribute('tabindex', -1)
  })
}

// eslint-disable-next-line no-unused-vars
function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  document.querySelectorAll('.focusable').forEach(e => {
    e.setAttribute('tabindex', 0)
  })
}

// eslint-disable-next-line no-unused-vars
function submitModal () {
  const $modal = document.getElementById('contact_modal')
  $modal.querySelectorAll('input').forEach(input => {
    console.log(input.value)
    input.value = ''
  })
  console.log($modal.querySelectorAll('textarea').value)
  $modal.querySelectorAll('textarea').value = ''
  closeModal()
}
