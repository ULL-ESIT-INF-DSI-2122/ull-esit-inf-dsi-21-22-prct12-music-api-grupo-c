import { model, Schema } from 'mongoose';
import { PlaylistInterface } from './playlist.interface';

const PlaylistSchema = new Schema<PlaylistInterface>({
  name: {
    type: String,
    require: true,
    unique: true,
    dropDups: true,
  },
  songs: {
    type: Array,
    require: true,
  },
  seconds: {
    type: Number,
    require: true,
  },
  genres: {
    type: Array,
    require: true,
  },
});

export const Playlist = model<PlaylistInterface>('Playlist', PlaylistSchema);
