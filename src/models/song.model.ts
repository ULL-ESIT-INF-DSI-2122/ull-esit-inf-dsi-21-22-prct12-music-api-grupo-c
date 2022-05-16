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

export const Song = model<SongInterface>('Song', SongSchema);
