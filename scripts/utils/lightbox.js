export class Lightbox {
  constructor (container) {
    this._container = container
    this._content = container.querySelector('.lightbox__content')
  }

  show (media) {
    this._container.style.display = 'flex'
    console.log(media)
    // reset lightbox content
    while (this._content.firstChild) {
      this._content.removeChild(this._content.firstChild)
    }
    let content = null
    if ('image' in media) {
      content = document.createElement('img')
      content.setAttribute('src', media.image)
    } else if ('video' in media) {
      content = document.createElement('video')
      content.setAttribute('controls', true)
      const source = document.createElement('source')
      source.setAttribute('src', media.video)
      content.appendChild(source)
    } else {
      throw new Error('Unknown media type')
    }
    const title = document.createElement('p')
    title.classList.add('lightbox__title')
    title.textContent = media.title

    this._content.appendChild(content)
    this._content.appendChild(title)
  }
}
