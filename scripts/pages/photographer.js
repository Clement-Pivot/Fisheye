import { MediaFactory } from '../factories/MediaFactory.js'
import { PersoPhotographerTemplate } from '../templates/persoPhotographer.js'
import { FilterButton } from '../utils/filterButton.js'
import { Lightbox } from '../utils/lightbox.js'

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

function getInfos (photographer, photographerMediaList, $infosWrapper) {
  const $infosPrice = $infosWrapper.querySelector('.photograph-infos__price')
  const $infosLikes = $infosWrapper.querySelector('.photograph-infos__likes')
  $infosPrice.textContent = `${photographer.price}€ / jour`
  let likes = 0
  photographerMediaList.forEach(media => {
    likes += media.likes
  })
  $infosLikes.textContent = `${likes} `
  const heart = document.createElement('i')
  heart.classList.add('fa-solid')
  heart.classList.add('fa-heart')
  $infosLikes.appendChild(heart)
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

  getInfos(photographer, photographerMediaList, document.querySelector('.photograph-infos'))

  const lightbox = new Lightbox(document.querySelector('.lightbox'))
  photographerMediaList.forEach(media => media.subscribe(lightbox))
}

init()
