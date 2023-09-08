import { PhotographerTemplate } from './photographer.js'

export class PersoPhotographerTemplate extends PhotographerTemplate {
  profileDOM () {
    const section = document.createElement('section')
    section.classList.add('photograph-header')

    const div = document.createElement('div')
    div.classList.add('photographer-profile')

    const h2 = document.createElement('h2')
    h2.classList.add('photographer-profile__name')
    h2.textContent = this._name

    div.appendChild(h2)

    const h3 = document.createElement('h3')
    h3.classList.add('photographer-profile__localisation')
    h3.textContent = `${this._city}, ${this._country}`

    const h4 = document.createElement('h4')
    h4.classList.add('photographer-profile__tagline')
    h4.textContent = this._tagline

    div.appendChild(h3)
    div.appendChild(h4)

    const button = document.createElement('button')
    button.classList.add('contact_button')
    button.textContent = 'Contactez-moi'
    // eslint-disable-next-line no-undef
    button.addEventListener('click', () => displayModal())

    const divImg = document.createElement('div')
    divImg.classList.add('photographer-profile__img')

    const img = document.createElement('img')
    img.setAttribute('src', this._picture)
    img.setAttribute('alt', this._name)
    img.classList.add(`photographer-profile__img--${this._id}`)

    divImg.appendChild(img)

    section.appendChild(div)
    section.appendChild(button)
    section.appendChild(divImg)
    return (section)
  }
}
