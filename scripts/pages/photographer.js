import { PersoPhotographerTemplate } from '../templates/persoPhotographer.js'

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

async function init () {
  const { photographers } = await getPhotographers()
  const photograph = new PersoPhotographerTemplate(getActualPhotographer(photographers))
  const $wrapper = document.querySelector('main')
  $wrapper.insertBefore(photograph.profileDOM(), $wrapper.firstChild)
}

init()
