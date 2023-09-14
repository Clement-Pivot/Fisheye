export class Lightbox {
  constructor (container) {
    this._container = container
    this._content = container.querySelector('.lightbox__content')
  }

  show (media) {
    console.log(media)
    this._container.style.display = 'flex'
    const content = document.createElement('img')
    content.setAttribute('src', media.image)

    const title = document.createElement('p')
    title.textContent = media.title

    this._content.appendChild(content)
    this._content.appendChild(title)
  }
}
