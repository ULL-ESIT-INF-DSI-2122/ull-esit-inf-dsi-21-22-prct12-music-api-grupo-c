import { Router } from 'express';
import artistController from '../controllers/artist.controller';

const artistRouter: Router = Router();

artistRouter.get('/', artistController.matchNameQuery, artistController.getArtistByName);
artistRouter.get('/', artistController.getAllArtists);
artistRouter.get('/:id', artistController.getArtistById);
artistRouter.post('/', artistController.addArtist);
artistRouter.put('/', artistController.matchNameQuery, artistController.updateArtistByName);
artistRouter.put('/:id', artistController.updateArtistById);
artistRouter.delete('/', artistController.matchNameQuery, artistController.deleteArtistByName);
artistRouter.delete('/:id', artistController.deleteArtistById);

/**
 * # Artist Router | Express Router object
 * Artists API section
 *
 * ##Routes:
 * - GET: `/?name=name value` (Get an artist by name)
 * - GET: `/` (Get all artists)
 * - GET: `/:id` (Get an artist by ID)
 * - POST: `/` (Post Artist)
 * - PUT: `/?name=name value` (Update artist using name in the query string)
 * - PUT: `/:id` (Udpate artist by ID)
 * - DELETE: `/?name=name value` (Delete artist using name in the query string)
 * - DELETE: `/:id` (Delete artist by ID)
 */
export default artistRouter;
