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
      .then((playlist) => {
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
        res.status(401).send({ success: false, msg: 'Get failed. Playlist not found.' });
        throw err;
      });
  },
  getPlaylistByName: (req: Request, res: Response) => {
    Playlist.findById(req.params.id)
      .then((playlist) => {
        res.status(200).send(playlist);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Get failed. Playlist not found.' });
        throw err;
      });
  },
  updatePlaylist: (req: Request, res: Response) => {
    Playlist.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((playlist) => {
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(400).send({ success: false, msg: 'Update failed. Playlist not found.' });
        throw err;
      });
  },
  deletePlaylist: (req: Request, res: Response) => {
    Playlist.deleteOne({ id: req.params.id })
      .then((playlist) => {
        res.status(200).json(playlist);
      })
      .catch((err) => {
        res.status(401).send({ success: false, msg: 'Delete failed. Playlist not found.' });
        throw err;
      });
  },
};
