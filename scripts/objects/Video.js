export class Video {
  constructor (media) {
    this._id = media.id
    this._photographerId = media.photographerId
    this._title = media.title
    this._video = `assets/images/${this._photographerId}/${media.video}`
    this._likes = media.likes
    this._date = media.date
    this._price = media.price

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
    this._article.append(h5)
  }

  get id () {
    return this._id
  }

  get photographerId () {
    return this._photographerId
  }

  get title () {
    return this._title
  }

  get likes () {
    return this._likes
  }

  get date () {
    return this._date
  }

  get price () {
    return this._price
  }

  get video () {
    return this._video
  }

  getMediaCardDOM () {
    return this._article
  }
}
