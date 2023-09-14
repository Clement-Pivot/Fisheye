export class FilterButtonObserver {
  constructor ($mediaContainer) {
    this._filters = new Set()
    this.$mediaContainer = $mediaContainer
  }

  refreshMediaContainer (photographerMediaList) {
    // delete wrapper's DOM media
    while (this.$mediaContainer.firstChild) {
      this.$mediaContainer.removeChild(this.$mediaContainer.firstChild)
    }
    photographerMediaList.forEach(media => this.$mediaContainer.appendChild(media.getMediaCardDOM()))
  }
}
