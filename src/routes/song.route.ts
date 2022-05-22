import { Router } from 'express';
import songController from '../controllers/song.controller';

const songRouter: Router = Router();

songRouter.get('/', songController.matchNameQuery, songController.getSongByName);
songRouter.get('/', songController.getAllSongs);
songRouter.get('/:id', songController.getSongById);
songRouter.post('/', songController.addSong);
songRouter.delete('/', songController.matchNameQuery, songController.deleteSongByName);
songRouter.delete('/:id', songController.deleteSongById);
songRouter.put('/', songController.matchNameQuery, songController.updateSongByName);
songRouter.put('/:id', songController.updateSongById);

/**
 * # Songs Router | Express Router object
 * Songs API section
 *
 * ##Routes:
 * - GET: `/` (Get all songs)
 * - GET: `?name=name value` (Get a song by name)
 * - GET: `/:id` (Get a song by ID)
 * - POST: `/` (Post Song)
 * - PUT: `?name=name value` (Update Song using name in the query string)
 * - PUT: `/:id` (Udpate Song by ID)
 * - DELETE: `/:id` (Delete song by ID)
 * - DELETE: `/?name=name value` (Delete song using name in the query string)
 */

export default songRouter;
