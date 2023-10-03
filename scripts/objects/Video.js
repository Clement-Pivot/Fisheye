import { Media } from './Media.js'

export class Video extends Media {
  constructor (media) {
    super(media)
    this._video = `assets/images/${this._photographerId}/${media.video}`

    this._article = document.createElement('article')
    this._article.classList.add('card')

    const video = document.createElement('video')
    const source = document.createElement('source')
    source.setAttribute('src', this._video)
    video.setAttribute('alt', `${this._title}, closeup view`)
    video.appendChild(source)
    this._article.appendChild(video)

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
    this._article.setAttribute('tabindex', 0)
    this._article.classList.add('focusable')
    this._article.append(h5)
  }

  get video () {
    return this._video
  }
}
