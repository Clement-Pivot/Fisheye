export class Picture {
  constructor (media) {
    this._id = media.id
    this._photographerId = media.photographerId
    this._title = media.title
    this._image = media.image
    this._likes = media.likes
    this._date = media.date
    this._price = media.price
  }
}
