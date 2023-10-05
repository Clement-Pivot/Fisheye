import { Media } from './Media.js'

export class Picture extends Media {
  constructor (media) {
    super(media)
    this._image = `assets/images/${this._photographerId}/${media.image}`
    this._article = document.createElement('article')
    this._article.classList.add('card')

    this._container = document.createElement('img')
    this._container.setAttribute('src', this._image)
    this._container.setAttribute('alt', `${this._title}, closeup view`)
    this._container.setAttribute('tabindex', 0)
    this._container.classList.add('focusable')
    this._article.appendChild(this._container)

    const h4 = document.createElement('h4')
    h4.textContent = this._title
    h4.classList.add('card-title')
    this._article.appendChild(h4)

    const p = document.createElement('p')
    p.textContent = `${this._likes}`
    const likeIcon = document.createElement('i')
    likeIcon.classList.add('fa-solid')
    likeIcon.classList.add('fa-heart')
    p.appendChild(likeIcon)
    p.classList.add('media-like')
    p.setAttribute('aria-label', `${this._likes} likes`)
    this._article.append(p)

    this._likeContainer = this._article.querySelector('.media-like')
  }

  get image () {
    return this._image
  }
}
