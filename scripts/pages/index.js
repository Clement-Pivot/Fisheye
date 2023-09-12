import { IndexPhotographerTemplate } from '../templates/indexPhotographer.js'

async function getPhotographers () {
  return fetch('./data/photographers.json')
    .then((resp) => resp.json())
    .catch((error) => alert(`Erreur ${error}`))
}

async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((data) => {
    const photographerModel = new IndexPhotographerTemplate(data)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init () {
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
