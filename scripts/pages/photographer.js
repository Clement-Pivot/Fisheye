import { MediaFactory } from '../factories/MediaFactory.js'
import { PersoPhotographerTemplate } from '../templates/persoPhotographer.js'
import { FilterButton } from '../utils/filterButton.js'
import { Lightbox } from '../utils/lightbox.js'
import { initModal } from '../utils/contactForm.js'
import { LikesObserver } from '../utils/likesObserver.js'

async function getPhotographers () {
  return fetch('./data/photographers.json')
    .then((resp) => resp.json())
    .catch((error) => alert(`Erreur ${error}`))
}

function getUrlParams (name) {
  // truncate ? from URL then compare each param with name
  return window.location.search.slice(1)
    .split('&').filter(param => param.split('=')[0] === name)[0]
    .split('=')[1]
}

function getActualPhotographer (photographers) {
  // return Object which is this page's data
  return photographers.filter((data) =>
    data.id.toString() === getUrlParams('id'))[0]
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
  const likesObs = new LikesObserver(photographerMediaList, document.querySelector('.photograph-infos'))
  likesObs.init()
  const lightbox = new Lightbox(document.querySelector('.lightbox'))
  photographerMediaList.forEach(media => {
    media.subscribe(lightbox)
    media.likeSubscribe(likesObs)
  })
}

init()
