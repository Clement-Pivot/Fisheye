import { PersoPhotographerTemplate } from '../templates/persoPhotographer.js'

async function getPhotographers () {
  return fetch('/data/photographers.json')
    .then((resp) => resp.json())
    .catch((error) => alert(`Erreur ${error}`))
}

function getActualPhotographer (photographers) {
  return photographers.filter((data) =>
    data.id.toString() === window.location.search.slice(1))[0]
}

async function init () {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  const photograph = new PersoPhotographerTemplate(getActualPhotographer(photographers))
  document.querySelector('main').appendChild(photograph.profileDOM())
}

init()
