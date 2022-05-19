import { NextFunction, Request, Response } from 'express';
import { Artist } from '../models/artist.model';

export default {
  matchNameQuery: (req: Request, res: Response, next: NextFunction) => next(req.query.name ? null : 'route'),
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
  getArtistByName: (req: Request, res: Response) => {
    Artist.findOne({ name: req.query.name })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Artist not found.' });
        throw err;
      });
  },

  getArtistById: (req: Request, res: Response) => {
    Artist.findById(req.params.id)
      .then((result) => {
        res.status(200).send(result);
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
      artistListeners: req.body.artistListeners,
    });
    newArtist.save()
      .then((result) => {
        res.status(201).json(result);
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
  updateArtist: (req: Request, res: Response) => {
    Artist.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
};
