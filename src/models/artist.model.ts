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

export const Artist = model<ArtistInterface>('Artist', ArtistSchema);
