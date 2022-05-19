import { Router } from 'express';
import playlistController from '../controllers/playlist.controller';

const playlistRouter: Router = Router();
playlistRouter.post('/:', playlistController.addPlaylist);
playlistRouter.get('/', playlistController.getAllPlaylist);
playlistRouter.get('/:id', playlistController.getPlaylistById);
playlistRouter.get('/:id', playlistController.getPlaylistByName);
playlistRouter.put('/:id', playlistController.updatePlaylist);
playlistRouter.delete('/:id', playlistController.deletePlaylist);

export default playlistRouter;
