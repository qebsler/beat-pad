import Tiles from './Tiles'
import list from './list'
const parent = document.getElementById('parent-pad')

let tiles = []

list.forEach(obj => {
  let sound = new Tiles(obj.name, parent, `./assets/sample/${obj.name}.wav`, obj.vol)
  sound.init()
  tiles.push(sound)
})
