import { Router } from 'express';
import playlistController from '../controllers/playlist.controller';

const playlistRouter: Router = Router();
playlistRouter.post('/', playlistController.addPlaylist);
playlistRouter.get('/', playlistController.getAllPlaylist);
playlistRouter.get('/:id', playlistController.getPlaylistById);
playlistRouter.get('/', playlistController.matchNameQuery, playlistController.getPlaylistByName);
playlistRouter.put('/:id', playlistController.updatePlaylistById);
playlistRouter.put('/', playlistController.matchNameQuery, playlistController.updatePlaylistByName);
playlistRouter.delete('/:id', playlistController.deletePlaylist);

export default playlistRouter;
