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
      console.log(element)
      element.style.display = 'inline-flex'
    })
    this._expanded = true
  }

  filter (order) {
    if (!this._expanded) {
      console.log('expand !')
      this.expand()
    } else {
      console.log(order)
      this._filters.forEach((filter, key) => {
        if (key !== order) {
          console.log(`cache ${key}`)
          filter.style.display = 'none'
        }
      })
      this._expanded = false
    }
  }

  filterByPopularity () {
    return 0
  }
}
