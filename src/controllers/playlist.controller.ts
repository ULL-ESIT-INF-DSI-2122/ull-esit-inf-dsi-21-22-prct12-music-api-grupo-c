import { NextFunction, Request, Response } from 'express';
import { Playlist } from '../models/playlist.model';

export default {
  matchNameQuery: (req: Request, res: Response, next: NextFunction) => next(req.query.name ? null : 'route'),
  addPlaylist: (req: Request, res: Response) => {
    const newPlaylist = new Playlist({
      name: req.body.name,
      songs: req.body.songs,
      seconds: req.body.seconds,
      genres: req.body.genres,
    });
    newPlaylist.save()
      .then((playlist) => {
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
        throw err;
      });
  },
  getAllPlaylist: (req: Request, res: Response) => {
    Playlist.find({})
      .then((playlist: Object[]) => {
        if (playlist.length === 0) {
          res.status(400).send({ success: false, msg: 'No playlists found in database' });
        }
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Playlists not found.' });
        throw err;
      });
  },
  getPlaylistById: (req: Request, res: Response) => {
    Playlist.findById(req.params.id)
      .then((playlist) => {
        res.status(200).send(playlist);
      })
      .catch((err) => {
        res.status(400).send({ success: false, msg: 'Get failed. Playlist not found.' });
        throw err;
      });
  },
  getPlaylistByName: (req: Request, res: Response) => {
    // @ts-ignore
    Playlist.findOne({ name: req.query.name })
      .then((playlist) => {
        res.status(200).send(playlist);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Playlist not found.' });
        throw err;
      });
  },
  updatePlaylistById: (req: Request, res: Response) => {
    Playlist.findByIdAndUpdate(req.params.id, req.body)
      .then((playlist) => {
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: err.msg });
        throw err;
      });
  },
  updatePlaylistByName: (req: Request, res: Response) => {
    // @ts-ignore
    Playlist.findOneAndUpdate({ name: req.query.name }, req.body)
      .then((playlist) => {
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: err.msg });
        throw err;
      });
  },
  deletePlaylistById: (req: Request, res: Response) => {
    Playlist.deleteOne({ name: req.params.id })
      .then((playlist) => {
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(400).send({ success: false, msg: err.msg });
        throw err;
      });
  },
  deletePlaylistByName: (req: Request, res: Response) => {
    // @ts-ignore
    Playlist.deleteOne({ name: req.query.name })
      .then((playlist) => {
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: err.msg });
        throw err;
      });
  },
};
