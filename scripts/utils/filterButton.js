export class FilterButton {
  constructor (container, medias) {
    this._container = container
    this._filters = new Map()
    this._filters.set('popularity', this._container.querySelector('#filter-popularity'))
    this._filters.set('date', this._container.querySelector('#filter-date'))
    this._filters.set('title', this._container.querySelector('#filter-title'))
    this._medias = medias
    this._expanded = true
  }

  init () {
    this._filters.forEach((elem, name) => {
      elem.addEventListener('click', () => this.filter(name))
    })
    // does a filter with the first filter
    this.filter(this._filters.keys().next().value)
  }

  expand () {
    this._filters.forEach(element => {
      element.style.display = 'inline-flex'
    })
    this._container.classList.add('active')
    this._expanded = true
  }

  showExpandedChevron () {
    this._container.querySelector('.fa-chevron-up').classList.remove('fa-chevron-up')
    this._filters.values().next().value.querySelector('i')
      .classList.add('fa-chevron-down')
  }

  showSelectedChevron (order) {
    // foreach because can be empty
    this._container.querySelectorAll('.fa-chevron-down')
      .forEach(icon => icon.classList.remove('fa-chevron-down'))
    this._filters.forEach((filter, key) => {
      if (key !== order) {
        filter.style.display = 'none'
      } else {
        filter.querySelector('i').classList.add('fa-chevron-up')
      }
    })
  }

  filter (order) {
    if (!this._expanded) {
      this.showExpandedChevron()
      this.expand()
    } else {
      switch (order) {
        case 'popularity':
          this.filterByPopularity()
          break
        case 'date':
          this.filterByDate()
          break
        case 'title':
          this.filterByTitle()
          break
        default:
          throw new Error('Unknow order')
      }
      this.showSelectedChevron(order)
      this._container.classList.remove('active')
      this._expanded = false
    }
  }

  filterByPopularity () {
    return 0
  }

  filterByDate () {
    return 0
  }

  filterByTitle () {
    return 0
  }
}
