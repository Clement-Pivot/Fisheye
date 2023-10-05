import { Media } from './Media.js'

export class Picture extends Media {
  constructor (media) {
    super(media)
    this._image = `assets/images/${this._photographerId}/${media.image}`

    this._container = document.createElement('img')
    this._container.setAttribute('src', this._image)
    this._container.setAttribute('alt', `${this._title}, closeup view`)
    this._container.setAttribute('tabindex', 0)
    this._container.classList.add('focusable')
    this._article.insertBefore(this._container, this._article.firstChild)
  }

  get image () {
    return this._image
  }
}
