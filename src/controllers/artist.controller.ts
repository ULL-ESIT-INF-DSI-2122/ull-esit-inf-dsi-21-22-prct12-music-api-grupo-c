import { NextFunction, Request, Response } from 'express';
import { Artist } from '../models/artist.model';

/**
 *  # Artist Controller | Queries Object
 *
 *  ## Middlewares
 *
 *  - matchNameQuery: used to select a route if a query string with name property is sent
 *
 *  ## Queries
 *
 *  - getAllArtists: finds all artists in the database
 *    -- Path: /artists
 *    -- Params: none
 *    -- Body: none
 *  - getArtistByName: finds an artist using the name in the query string
 *    -- Path: /artists?name=<name to search>
 *    -- Params: none
 *    -- Body: none
 *  - getArtistById: finds an artist using the artist ID as param
 *    -- Path: /artists/:id
 *    -- Params: id
 *    -- Body: none
 *  - addArtist: Adds an artist to the database
 *    -- Path: /artists
 *    -- Params: none
 *    -- Body: Artist model JSON
 *  - updateArtistByName: finds and updates an artist using the name in the query
 *  string with a given JSON
 *    -- Path: /artists?name=<name to search>
 *    -- Params: none
 *    -- Body: Artist model JSON
 *  - updateArtistById: finds and updates an artist using the artist ID as param with a given JSON
 *    -- Path: /artists/:id
 *    -- Params: id
 *    -- Body: Artists model JSON
 */

export default {
  matchNameQuery: (req: Request, res: Response, next: NextFunction) => next(req.query.name ? null : 'route'),
  getAllArtists: (req: Request, res: Response) => {
    Artist.find()
      .then((result: Object[]) => {
        if (result.length === 0) {
          res.status(400).send({ success: false, msg: 'No artists found in database' });
        }
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).send({ success: false, msg: 'Get failed. Artists not found.' });
        throw err;
      });
  },
  getArtistByName: (req: Request, res: Response) => {
    // @ts-ignore
    Artist.findOne({ name: req.query.name })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send({ success: false, msg: 'Get failed. Artist not found.' });
        throw err;
      });
  },
  getArtistById: (req: Request, res: Response) => {
    Artist.findById(req.params.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send({ success: false, msg: 'Get failed. Artist not found.' });
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
        res.status(400).json({ success: false, msg: err.msg });
        throw err;
      });
  },
  deleteArtist: (req: Request, res: Response) => {
    Artist.deleteOne({ name: req.params.artist })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ success: false, msg: err.msg });
        throw err;
      });
  },
  updateArtistByName: (req: Request, res: Response) => {
    // @ts-ignore
    Artist.findOneAndUpdate({ name: req.query.name }, req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
  updateArtistById: (req: Request, res: Response) => {
    Artist.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
};
