import { PhotographerTemplate } from './photographer.js'
import { displayModal } from '../utils/contactForm.js'

export class PersoPhotographerTemplate extends PhotographerTemplate {
  profileDOM () {
    const section = document.createElement('section')
    section.classList.add('photograph-header')

    const div = document.createElement('div')
    div.classList.add('photographer-profile')

    const h1 = document.createElement('h1')
    h1.classList.add('photographer-profile__name')
    h1.textContent = this._name

    div.appendChild(h1)

    const h2 = document.createElement('p')
    h2.classList.add('photographer-profile__localisation')
    h2.textContent = `${this._city}, ${this._country}`

    const h3 = document.createElement('p')
    h3.classList.add('photographer-profile__tagline')
    h3.textContent = this._tagline

    div.appendChild(h2)
    div.appendChild(h3)

    const button = document.createElement('button')
    button.classList.add('contact_button')
    button.classList.add('focusable')
    button.textContent = 'Contactez-moi'
    button.addEventListener('click', () => displayModal())

    const divImg = document.createElement('div')
    divImg.classList.add('photographer-profile__img')

    const img = document.createElement('img')
    img.setAttribute('src', this._picture)
    img.setAttribute('alt', this._name)
    img.classList.add(`photographer__img--${this._id}`)

    divImg.appendChild(img)

    section.appendChild(div)
    section.appendChild(button)
    section.appendChild(divImg)
    return (section)
  }
}
