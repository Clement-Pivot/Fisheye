export class Lightbox {
  constructor (container) {
    this._container = container
    this._content = container.querySelector('.lightbox__content')

    this._closeButton = container.querySelector('.lightbox__close')
    this._closeButton.addEventListener('click', () => this.close())

    this._prevButton = container.querySelector('.lightbox__left')
    this._prevButton.addEventListener('click', () => this.previous())

    this._nextButton = container.querySelector('.lightbox__right')
    this._nextButton.addEventListener('click', () => this.next())

    this._currentMedia = null

    this._title = document.createElement('p')
    this._title.classList.add('lightbox__title')

    document.addEventListener('keyup', this)
  }

  handleEvent (event) {
    if (this._currentMedia) {
      if (event.key === 'ArrowLeft') {
        this.previous()
      } else if (event.key === 'ArrowRight') {
        this.next()
      } else if (event.key === 'Escape') {
        this.close()
      }
    }
  }

  close () {
    this._currentMedia._container.focus()
    this._currentMedia = null
    this._container.style.display = 'none'
    document.querySelectorAll('.focusable').forEach(e => {
      e.setAttribute('tabindex', 0)
    })
  }

  previous () {
    this.show(this._currentMedia.previous)
  }

  next () {
    this.show(this._currentMedia.next)
  }

  show (media) {
    this._currentMedia = media
    this._container.style.display = 'flex'
    // reset lightbox content
    while (this._content.firstChild) {
      this._content.removeChild(this._content.firstChild)
    }
    let content = null
    if ('image' in media) {
      content = document.createElement('img')
      content.setAttribute('src', media.image)
      content.setAttribute('alt', media.title)
    } else if ('video' in media) {
      content = document.createElement('video')
      content.setAttribute('aria-label', media.title)
      content.setAttribute('controls', true)
      const source = document.createElement('source')
      source.setAttribute('src', media.video)
      content.appendChild(source)
    } else {
      throw new Error('Unknown media type')
    }
    this._title.textContent = media.title

    this._content.appendChild(content)
    this._content.appendChild(this._title)
    document.querySelectorAll('.focusable').forEach(e => {
      e.setAttribute('tabindex', -1)
    })
  }
}
