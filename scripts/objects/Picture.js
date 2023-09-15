import { Media } from './Media.js'

export class Picture extends Media {
  constructor (media) {
    super(media)
    this._image = `assets/images/${this._photographerId}/${media.image}`
    this._article = document.createElement('article')
    this._article.classList.add('card')

    const img = document.createElement('img')
    img.setAttribute('src', this._image)
    img.setAttribute('alt', `${this._title}, closeup view`)
    this._article.appendChild(img)

    const h4 = document.createElement('h4')
    h4.textContent = this._title
    h4.classList.add('card-title')
    this._article.appendChild(h4)

    const h5 = document.createElement('h5')
    h5.textContent = `${this._likes}`
    const likeIcon = document.createElement('i')
    likeIcon.classList.add('fa-solid')
    likeIcon.classList.add('fa-heart')
    h5.appendChild(likeIcon)
    h5.classList.add('media-like')
    this._article.append(h5)
  }

  get image () {
    return this._image
  }
}
