export class Song {
  id?: string;

  name: string;

  artist: string;

  seconds: number;

  genres: string[];

  single: boolean;

  views: number;

  constructor(
    name: string,
    artist: string,
    seconds: number,
    genres: string[],
    single: boolean,
    views: number,
  ) {
    this.name = name;
    this.artist = artist;
    this.seconds = seconds;
    this.genres = genres;
    this.single = single;
    this.views = views;
  }
}
