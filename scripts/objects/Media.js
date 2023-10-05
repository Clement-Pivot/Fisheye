export class Media {
  constructor (media) {
    this._id = media.id
    this._photographerId = media.photographerId
    this._title = media.title
    this._likes = media.likes
    this._date = media.date
    this._price = media.price
    this._observers = new Set()
    this._likeObservers = new Set()
    this._next = null
    this._previous = null
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

  get next () {
    return this._next
  }

  get previous () {
    return this._previous
  }

  set next (elem) {
    this._next = elem
  }

  set previous (elem) {
    this._previous = elem
  }

  subscribe (obs) {
    this._container.addEventListener('click', () => this.fire())
    this._container.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        this.fire()
        e.preventDefault()
      }
    })
    this._observers.add(obs)
  }

  unsubscribe (obs) {
    this._observers.delete(obs)
  }

  fire () {
    this._observers.forEach(obs => obs.show(this))
  }

  likeSubscribe (obs) {
    obs.subscribed(this)
    this._likeObservers.add(obs)
  }

  likeUnsubscribe (obs) {
    obs.unsubscribed(this)
    this._likeObservers.delete(obs)
  }

  likeFire (e) {
    this._likeObservers.forEach(obs => {
      obs.increment(this, e)
    })
  }

  getMediaCardDOM () {
    return this._article
  }
}
