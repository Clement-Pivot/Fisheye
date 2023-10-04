import { MediaFactory } from '../factories/MediaFactory.js'
import { PersoPhotographerTemplate } from '../templates/persoPhotographer.js'
import { FilterButton } from '../utils/filterButton.js'
import { Lightbox } from '../utils/lightbox.js'
import { submitModal, closeModal } from '../utils/contactForm.js'

async function getPhotographers () {
  return fetch('./data/photographers.json')
    .then((resp) => resp.json())
    .catch((error) => alert(`Erreur ${error}`))
}

function getActualPhotographer (photographers) {
  // return Object which is this page's data
  return photographers.filter((data) =>
    data.id.toString() === window.location.search.slice(1))[0]
}

function getPhotographerMedia (photographerId, mediaList) {
  return mediaList
    .filter(media => media.photographerId === photographerId)
    .map(media => new MediaFactory(media))
}

function setPrice (photographer, $infosWrapper) {
  const $infosPrice = $infosWrapper.querySelector('.photograph-infos__price')
  $infosPrice.textContent = `${photographer.price}€ / jour`
}

function setLikes (photographerMediaList, $infosWrapper) {
  const $infosLikes = $infosWrapper.querySelector('.photograph-infos__likes')
  let likes = 0
  photographerMediaList.forEach(media => {
    likes += media.likes
  })
  $infosLikes.textContent = likes
  const heart = document.createElement('i')
  heart.classList.add('fa-solid')
  heart.classList.add('fa-heart')
  $infosLikes.appendChild(heart)
}

function initModal (photographer) {
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

function incrementLikes (event) {
  event.stopPropagation()
  // change only text not childs
  const text = event.target.childNodes[0]
  text.textContent = Number(text.textContent) + 1
  const $infoLikes = document.querySelector('.photograph-infos__likes').childNodes[0]
  $infoLikes.textContent = Number($infoLikes.textContent) + 1
}

async function init () {
  const { photographers, media } = await getPhotographers()
  const photographer = new PersoPhotographerTemplate(getActualPhotographer(photographers))

  const $profilWrapper = document.querySelector('main')
  $profilWrapper.insertBefore(photographer.profileDOM(), $profilWrapper.firstChild)

  let photographerMediaList = getPhotographerMedia(photographer.id, media)
  const $mediaContainer = document.querySelector('.media-container')
  const filter = new FilterButton(document.querySelector('.filter-button__container'),
    photographerMediaList, $mediaContainer)

  photographerMediaList = filter.init()

  setPrice(photographer, document.querySelector('.photograph-infos'))
  initModal(photographer)
  setLikes(photographerMediaList, document.querySelector('.photograph-infos'))
  document.querySelectorAll('.media-like').forEach(like => {
    like.addEventListener('click', e => incrementLikes(e), { once: true })
    like.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        incrementLikes(e)
        like.classList.remove('focusable')
        like.setAttribute('tabindex', -1)
      }
    }, { once: true })
    like.classList.add('focusable')
    like.setAttribute('tabindex', 0)
  })

  const lightbox = new Lightbox(document.querySelector('.lightbox'))
  photographerMediaList.forEach(media => media.subscribe(lightbox))
}

init()
