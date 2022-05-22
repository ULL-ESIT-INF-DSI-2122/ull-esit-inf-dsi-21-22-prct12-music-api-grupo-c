/**
 * # Song | Interface
 * Defines how all song related objects should be defined
 */

export interface SongInterface {
  name: string;
  artist: string;
  seconds: number;
  genres: string[];
  single: boolean;
  views: number;
}
