export class LikesObserver {
  constructor (medias, infosWrapper) {
    this._medias = medias
    this._infosWrapper = infosWrapper
    this._totalLikes = 0
  }

  increment (media) {
    this._totalLikes++
    // change only text not childs
    const text = media._likeContainer.childNodes[0]
    text.textContent = Number(text.textContent) + 1
    document.querySelector('.photograph-infos__likes').childNodes[0].textContent = this._totalLikes
    media._likeContainer.parentNode.querySelector('.focusable').focus()
    media.likeUnsubscribe(this)
  }

  subscribed (media) {
    media._likeContainer.addEventListener('click', e => media.likeFire(e))
    media._likeContainer.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        media.likeFire(e)
        e.preventDefault()
      }
    })
    media._likeContainer.classList.add('focusable')
    media._likeContainer.setAttribute('tabindex', 0)
  }

  unsubscribed (media) {
    media._likeContainer.classList.remove('focusable')
    media._likeContainer.setAttribute('tabindex', -1)
  }

  init () {
    const infosLikes = this._infosWrapper.querySelector('.photograph-infos__likes')
    this._medias.forEach(media => {
      this._totalLikes += media.likes
    })
    infosLikes.textContent = this._totalLikes
    const heart = document.createElement('i')
    heart.classList.add('fa-solid')
    heart.classList.add('fa-heart')
    heart.setAttribute('aria-label', 'likes')
    heart.setAttribute('role', 'img')
    infosLikes.appendChild(heart)
  }
}
