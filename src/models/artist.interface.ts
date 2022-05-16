export class Artist {
  id?: string;

  name: string;

  genres: string[];

  songs: string[];

  listeners: number;

  constructor(
    name: string,
    genres: string[],
    songs: string[],
    listeners: number,
  ) {
    this.name = name;
    this.genres = genres;
    this.songs = songs;
    this.listeners = listeners;
  }
}
