import { Request, Response } from 'express';
import { Song } from '../models/song.model';

export default {
  getAllSongs: (req: Request, res: Response) => {
    // eslint-disable-next-line array-callback-return
    Song.find((err, songs) => {
      if (err) {
        res.json(err);
      } else {
        res.json(songs);
      }
    });
  },
  getSong: (req: Request, res: Response) => {
    Song.findOne({ name: req.params.song })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(401).send({ success: false, msg: 'Get failed. Song not found.' });
      });
  },
  addSong: (req: Request, res: Response) => {
    const newSong = new Song({
      name: req.body.name,
      artist: req.body.artist,
      seconds: req.body.seconds,
      genres: req.body.genres,
      single: req.body.single,
      views: req.body.views,
    });
    newSong.save()
      .then(() => {
        res.status(200).json({ exer: newSong });
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
      });
  },
  deleteSong: (req: Request, res: Response) => {
    Song.deleteOne({ name: req.params.song })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
      });
  },
};
