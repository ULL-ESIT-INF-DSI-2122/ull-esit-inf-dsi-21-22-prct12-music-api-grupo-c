import { Router } from 'express';
import songController from '../controllers/song.controller';

const songRouter: Router = Router();

songRouter.get('/', songController.matchNameQuery, songController.getSongByName);
songRouter.get('/', songController.getAllSongs);
songRouter.get('/:id', songController.getSongById);
songRouter.post('/', songController.addSong);
songRouter.delete('/:id', songController.deleteSong);
songRouter.put('/', songController.matchNameQuery, songController.updateSongByName);
songRouter.put('/:id', songController.updateSongById);

export default songRouter;
