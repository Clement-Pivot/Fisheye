export class Media {
  constructor (media) {
    this._id = media.id
    this._photographerId = media.photographerId
    this._title = media.title
    this._likes = media.likes
    this._date = media.date
    this._price = media.price
    this._observers = new Set()
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

  subscribe (obs) {
    this._article.addEventListener('click', () => this.fire())
    this._observers.add(obs)
  }

  unsubscribe (obs) {
    this._observers.delete(obs)
  }

  fire () {
    this._observers.forEach(obs => obs.show(this))
  }

  getMediaCardDOM () {
    return this._article
  }
}
