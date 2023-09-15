import { PhotographerTemplate } from './photographer.js'

export class IndexPhotographerTemplate extends PhotographerTemplate {
  contextCardDom () {
    const article = document.createElement('article')
    article.classList.add('photographerCard')

    const link = document.createElement('a')
    link.setAttribute('href', `photographer.html?${this._id}`)

    const divImg = document.createElement('div')
    divImg.classList.add('photographerCard__img')

    const img = document.createElement('img')
    img.setAttribute('src', this._picture)
    img.setAttribute('alt', '')
    img.classList.add(`photographerCard__img--${this._id}`)

    divImg.appendChild(img)
    link.appendChild(divImg)

    const h2 = document.createElement('h2')
    h2.classList.add('photographerCard__name')
    h2.textContent = this._name

    link.appendChild(h2)

    const h3 = document.createElement('h3')
    h3.classList.add('photographerCard__localisation')
    h3.textContent = `${this._city}, ${this._country}`

    const h4 = document.createElement('h4')
    h4.classList.add('photographerCard__tagline')
    h4.textContent = this._tagline

    const h5 = document.createElement('h5')
    h5.classList.add('photographerCard__price')
    h5.textContent = `${this._price}€/jour`

    article.appendChild(link)
    article.appendChild(h3)
    article.appendChild(h4)
    article.appendChild(h5)
    return (article)
  }
}
