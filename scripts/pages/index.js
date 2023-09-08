import { PhotographerTemplate } from '../templates/photographer.js'

async function getPhotographers () {
  return fetch('./data/photographers.json')
    .then((resp) => resp.json())
    .catch((error) => alert(`Erreur ${error}`))
}

async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((data) => {
    const photographerModel = new PhotographerTemplate(data)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init () {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
