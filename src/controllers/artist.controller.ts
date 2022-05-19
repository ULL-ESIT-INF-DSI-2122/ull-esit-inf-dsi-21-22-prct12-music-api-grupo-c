import { Request, Response } from 'express';
import { Artist } from '../models/artist.model';

export default {
  getAllArtists: (req: Request, res: Response) => {
    Artist.find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Artists not found.' });
        throw err;
      });
  },
  getArtist: (req: Request, res: Response) => {
    Artist.findOne({ name: req.params.artist })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Artist not found.' });
        throw err;
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
        throw err;
      });
  },
  deleteArtist: (req: Request, res: Response) => {
    Artist.deleteOne({ name: req.params.artist })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
};
