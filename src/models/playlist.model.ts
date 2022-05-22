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

/**
 * # Playlist | Mongoose model
 * The Schema defines an playlist object for the database
 * (Uses Playlist Interface)
 *
 * ## Schema shape
 *
 * name: String (required, unique)
 * songs: Array of Strings (required)
 * seconds: Number (required)
 * genres: Array of Strings (required)
 */

export const Playlist = model<PlaylistInterface>('Playlist', PlaylistSchema);
