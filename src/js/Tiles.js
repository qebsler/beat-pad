export default class Tiles {
  /** Constructor
   * @param {string} name
   * @param {HTMLDivElement} parent
   * @param {string} src
   * @param {number} volume */
  constructor (name, parent, src, volume) {
    this.name = name
    this.parent = parent
    this.audio = new window.Audio(src)
    this.audio.volume = volume
  }

  init () {
    this.el = document.createElement('button')
    this.el.classList.add('pad-tiles')
    this.el.innerHTML = '<p class="label">' + this.name + '</p>'
    this.parent.appendChild(this.el)
    this.audio.loop = true
    this.played = false

    this.el.addEventListener('click', () => {
      if (this.played) this.audio.pause()
      else this.audio.play()

      this.played = !this.played
    })
  }
}
