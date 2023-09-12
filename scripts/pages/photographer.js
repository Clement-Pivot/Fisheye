import { MediaFactory } from '../factories/MediaFactory.js'
import { PersoPhotographerTemplate } from '../templates/persoPhotographer.js'
// import { MediaFactory } from '../factories/MediaFactory.js'

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

async function init () {
  const { photographers, media } = await getPhotographers()
  const photographer = new PersoPhotographerTemplate(getActualPhotographer(photographers))

  const $profilWrapper = document.querySelector('main')
  $profilWrapper.insertBefore(photographer.profileDOM(), $profilWrapper.firstChild)

  const photographerMediaList = getPhotographerMedia(photographer.id, media)
  const $mediaWrapper = document.querySelector('.media-container')
  photographerMediaList.forEach(media => $mediaWrapper.appendChild(media.getMediaCardDOM()))
}

init()
