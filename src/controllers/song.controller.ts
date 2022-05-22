import { NextFunction, Request, Response } from 'express';
import { Song } from '../models/song.model';

/**
 *  # Song Controller | Queries Object
 *
 *  ## Middlewares
 *
 *  - matchNameQuery: used to select a route if a query string with name property is sent
 *
 *  ## Queries
 *
 *  - getAllSongs: finds all songs in the database
 *    -- Path: /songs
 *    -- Params: none
 *    -- Body: none
 *
 *  - getSongByName: finds a song using the name in the query string
 *    -- Path: /songs/?name=<name to search>
 *    -- Params: none
 *    -- Body: none
 *
 *  - getSongById: finds a song using the song ID as param
 *    -- Path: /songs/:id
 *    -- Params: id
 *    -- Body: none
 *
 *  - addSong: add a song to the database
 *    -- Path: /songs
 *    -- Params: none
 *    -- Body: Song model JSON
 *
 *   - deleteSongById: delete a song using the song ID as param
 *    -- Path: /songs/:id
 *    -- Params: id
 *    -- Body: none
 *
 *   - deleteSongByName: delete a song using name in the query string
 *    -- Path: /songs/?name=<name to search>
 *    -- Params: id
 *    -- Body: none
 *
 *   - updateSongByName: finds and update a song using the name in the query
 *  string with a given JSON
 *    -- Path: /songs/?name=<name to search>
 *    -- Params: none
 *    -- Body: Song model JSON
 *
 *   - updateSongByName: finds and updates a song using the song ID as param
 *  with a given JSON
 *    -- Path: /songs/:id
 *    -- Params: id
 *    -- Body: Song model JSON
 */

export default {
  matchNameQuery: (req: Request, res: Response, next: NextFunction) => next(req.query.name ? null : 'route'),
  getAllSongs: (req: Request, res: Response) => {
    Song.find()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Song not found.' });
        throw err;
      });
  },
  getSongByName: (req: Request, res: Response) => {
    Song.findOne({ name: req.params.song })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Song not found.' });
        throw err;
      });
  },
  getSongById: (req: Request, res: Response) => {
    Song.findById(req.params.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send({ success: false, msg: 'Get failed. Song not found.' });
        throw err;
      });
  },
  addSong: (req: Request, res: Response) => {
    const newSong = new Song({
      name: req.body.name,
      song: req.body.song,
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
        throw err;
      });
  },
  deleteSongById: (req: Request, res: Response) => {
    Song.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
  deleteSongByName: (req: Request, res: Response) => {
    // @ts-ignore
    Song.findOneAndDelete({ name: req.query.name })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
  deleteSongByName: (req: Request, res: Response) => {
    // @ts-ignore
    Song.deleteOne({ name: req.query.name })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: err.msg });
        throw err;
      });
  },
  updateSongByName: (req: Request, res: Response) => {
    // @ts-ignore
    Song.findOneAndUpdate({ name: req.query.name }, req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
  updateSongById: (req: Request, res: Response) => {
    Song.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
};
