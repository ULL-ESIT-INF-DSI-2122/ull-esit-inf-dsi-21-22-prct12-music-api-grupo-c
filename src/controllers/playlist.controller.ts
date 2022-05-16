import { Request, Response } from 'express';
import { Playlist } from '../models/playlist.model';

export default {
  addPlaylist: (req: Request, res: Response) => {
    const newPlaylist = new Playlist({
      name: req.body.name,
      songs: req.body.songs,
      seconds: req.body.seconds,
      genres: req.body.genres,
    });
    newPlaylist.save()
      .then(() => {
        res.status(200).json({ exer: newPlaylist });
      })
      .catch((err) => {
        res.status(401).json({ success: false, msg: err.msg });
      });
  },
  getPlaylist: (req: Request, res: Response) => {
    Playlist.findOne({
      name: req.params.exercise,
    }, (err, exer) => {
      if (err) throw err;
      if (!exer) {
        res.status(401).send({ success: false, msg: 'Update failed. Playlist not found.' });
      } else {
        res.status(200).json(exer);
      }
    });
  },
  updatePlaylist: (req: Request, res: Response) => {
    Playlist.findOne({
      name: req.params.exercise,
    }, (err, result) => {
      if (err) throw err;
      if (!result) {
        res.status(401).send({ success: false, msg: 'Update failed. Playlist not found.' });
      } else {
        if (req.body.name !== '') {
          result.name = req.body.name;
        }
        if (req.body.songs !== '') {
          result.songs = req.body.songs;
        }
        if (req.body.seconds !== '') {
          result.seconds = req.body.seconds;
        }
        if (req.body.genres !== '') {
          result.genres = req.body.genres;
        }
        result.save()
          .then(() => {
            res.status(200).json(result);
          })
          .catch((error) => {
            res.status(400).json({ success: false, msg: error.msg });
          });
      }
    });
  },
  deletePlaylist: (req: Request, res: Response) => {
    Playlist.deleteOne({
      name: req.params.name,
    }, (err, result) => {
      if (err) throw err;
      if (!result) {
        res.status(401).send({ success: false, msg: 'Update failed. Playlist not found.' });
      } else {
        res.status(200).json(result);
      }
    });
  },
};
