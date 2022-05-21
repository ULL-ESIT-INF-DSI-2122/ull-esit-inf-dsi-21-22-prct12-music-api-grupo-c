/**
 * # Artist | Interface
 * Defines how all artist related objects should be defined
 */

export interface ArtistInterface {
  name: string,
  genres: string[],
  songs: string[],
  artistListeners: number
}
