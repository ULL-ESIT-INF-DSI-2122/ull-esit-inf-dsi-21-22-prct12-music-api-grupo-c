export class Playlist {
  id?: string;

  name: string;

  songs: string[];

  seconds: number;

  genres: string[];

  constructor(
    name: string,
    songs: string[],
    seconds: number,
    genres: string[],
  ) {
    this.name = name;
    this.songs = songs;
    this.seconds = seconds;
    this.genres = genres;
  }
}
