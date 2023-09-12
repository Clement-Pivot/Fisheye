import { Picture } from '../objects/Picture.js'
import { Video } from '../objects/Video.js'

export class MediaFactory {
  constructor (media) {
    return Object.hasOwn(media, 'image') ? new Picture(media) : new Video(media)
  }
}
