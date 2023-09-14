import { MediaFactory } from '../factories/MediaFactory.js'
import { PersoPhotographerTemplate } from '../templates/persoPhotographer.js'
import { FilterButton } from '../utils/filterButton.js'

async function getPhotographers () {
  return fetch('/data/photographers.json')
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

function getLikes (photographerMediaList, $infosLikes) {
  let likes = 0
  photographerMediaList.forEach(media => {
    likes += media.likes
  })
  return likes
}

async function init () {
  const { photographers, media } = await getPhotographers()
  const photographer = new PersoPhotographerTemplate(getActualPhotographer(photographers))

  const $profilWrapper = document.querySelector('main')
  $profilWrapper.insertBefore(photographer.profileDOM(), $profilWrapper.firstChild)

  const $infosWrapper = document.querySelector('.photograph-infos')
  const $infosPrice = $infosWrapper.querySelector('.photograph-infos__price')
  const $infosLikes = $infosWrapper.querySelector('.photograph-infos__likes')
  $infosPrice.textContent = `${photographer.price}€ / jour`

  const photographerMediaList = getPhotographerMedia(photographer.id, media)
  const filter = new FilterButton(document.querySelector('.filter-button__container'), photographerMediaList, document.querySelector('.media-container'))

  $infosLikes.textContent = getLikes(photographerMediaList, $infosLikes)
  $infosLikes.textContent += ' '
  const heart = document.createElement('i')
  heart.classList.add('fa-solid')
  heart.classList.add('fa-heart')
  $infosLikes.appendChild(heart)
  filter.getOrder()
}

init()
