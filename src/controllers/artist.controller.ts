import { Request, Response } from 'express';
import { Artist } from '../models/artist.model';

export default {
  getAllArtists: (req: Request, res: Response) => {
    // eslint-disable-next-line array-callback-return
    Artist.find((err, artists) => {
      if (err) {
        res.json(err);
      } else {
        res.json(artists);
      }
    });
  },
  getArtist: (req: Request, res: Response) => {
    Artist.findOne({ name: req.params.artist })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(401).send({ success: false, msg: 'Get failed. Artist not found.' });
      });
  },
  addArtist: (req: Request, res: Response) => {
    const newArtist = new Artist({
      name: req.body.name,
      genres: req.body.genres,
      songs: req.body.songs,
      listeners: req.body.listeners,
    });
    newArtist.save()
      .then(() => {
        res.status(200).json({ exer: newArtist });
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
      });
  },
  deleteArtist: (req: Request, res: Response) => {
    Artist.deleteOne({ name: req.params.artist })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
      });
  },
};
