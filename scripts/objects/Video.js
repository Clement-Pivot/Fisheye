import { Media } from './Media.js'

export class Video extends Media {
  constructor (media) {
    super(media)
    this._video = `assets/images/${this._photographerId}/${media.video}`

    this._container = document.createElement('video')
    const source = document.createElement('source')
    source.setAttribute('src', this._video)
    this._container.setAttribute('title', `${this._title}, closeup view`)
    this._container.setAttribute('tabindex', 0)
    this._container.classList.add('focusable')
    this._container.appendChild(source)
    this._article.insertBefore(this._container, this._article.firstChild)
  }

  get video () {
    return this._video
  }
}
