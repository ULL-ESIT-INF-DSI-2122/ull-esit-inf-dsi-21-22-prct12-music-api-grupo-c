import { model, Schema } from 'mongoose';
import { ArtistInterface } from './artist.interface';

const ArtistSchema = new Schema<ArtistInterface>({
  name: {
    type: String,
    require: true,
    unique: true,
    dropDups: true,
  },
  genres: {
    type: Array,
    require: true,
  },
  songs: {
    type: Array,
    require: true,
  },
  artistListeners: {
    type: Number,
    require: true,
  },
});

/**
 * # Artist | Mongoose model
 * The Schema defines an artist object for the database
 * (Uses Artist Interface)
 *
 * ## Schema shape
 *
 * name: String (required, unique)
 * genres: Array of Strings (required)
 * songs: Array of Strings (required)
 * artistListeners: Number (required)
 */

export const Artist = model<ArtistInterface>('Artist', ArtistSchema);
