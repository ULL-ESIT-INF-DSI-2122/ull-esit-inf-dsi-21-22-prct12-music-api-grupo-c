/**
 * # Playlist | Interface
 * Defines how all playlist related objects should be defined
 */

export interface PlaylistInterface {
  name: string,
  songs: string[],
  seconds: number,
  genres: string[]
}
