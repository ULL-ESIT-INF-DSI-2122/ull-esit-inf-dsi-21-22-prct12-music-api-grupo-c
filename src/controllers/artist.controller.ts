import { Request, Response } from 'express';
import { Artist } from '../models/artist.model';

export default {
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
};
