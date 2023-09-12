export class PhotographerTemplate {
  constructor (data) {
    this._name = data.name
    this._picture = `assets/photographers/${data.portrait}`
    this._city = data.city
    this._country = data.country
    this._price = data.price
    this._tagline = data.tagline
    this._id = data.id
  }

  get name () {
    return this._name
  }

  get picture () {
    return this._picture
  }

  get city () {
    return this._city
  }

  get country () {
    return this._country
  }

  get price () {
    return this._price
  }

  get tagline () {
    return this._tagline
  }

  get id () {
    return this._id
  }

  getUserCardDOM () {
    return this.contextCardDom()
  }
}
