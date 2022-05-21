import { model, Schema } from 'mongoose';
import { SongInterface } from './song.interface';

const SongSchema = new Schema<SongInterface>({
  name: {
    type: String,
    require: true,
  },
  artist: {
    type: String,
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
  single: {
    type: Boolean,
    require: true,
  },
  views: {
    type: Number,
  },
});

/**
 * # Song | Mongoose model
 * The Schema defines a song object for the database
 * (Uses Song Interface)
 *
 * ## Schema shape
 *
 * name: String (required)
 * artist: String (required)
 * seconds: Number (required)
 * genres: Array of Strings (required)
 * single: Boolean (required)
 * views: Number (not required)
 */

export const Song = model<SongInterface>('Song', SongSchema);
