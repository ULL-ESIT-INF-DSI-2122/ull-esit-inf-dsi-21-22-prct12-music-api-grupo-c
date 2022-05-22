import { Router } from 'express';
import playlistController from '../controllers/playlist.controller';

const playlistRouter: Router = Router();
playlistRouter.get('/', playlistController.matchNameQuery, playlistController.getPlaylistByName);
playlistRouter.post('/', playlistController.addPlaylist);
playlistRouter.get('/', playlistController.getAllPlaylists);
playlistRouter.get('/:id', playlistController.getPlaylistById);
playlistRouter.put('/:id', playlistController.updatePlaylistById);
playlistRouter.put('/', playlistController.matchNameQuery, playlistController.updatePlaylistByName);
playlistRouter.delete('/', playlistController.matchNameQuery, playlistController.deletePlaylistByName);
playlistRouter.delete('/:id', playlistController.deletePlaylistById);

/**
 * # Playlists Router | Express Router object
 * Playlists API section
 *
 * ##Routes:
 * - GET: `/` (Get all playlists)
 * - GET: `?name=name value` (Get a playlist by name)
 * - GET: `/:id` (Get a playlist by ID)
 * - POST: `/` (Post Playlist)
 * - PUT: `?name=name value` (Update Playlist using name in the query string)
 * - PUT: `/:id` (Udpate Playlist by ID)
 * - DELETE: `/:id` (Delete playlist by ID)
 * - DELETE: `?name=name value` (Delete playlist using name in the query string)
 */

export default playlistRouter;
