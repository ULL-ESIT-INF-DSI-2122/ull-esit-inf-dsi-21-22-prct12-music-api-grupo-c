import { Router } from 'express';
import artistController from '../controllers/artist.controller';

const artistRouter: Router = Router();

artistRouter.get('/', artistController.matchNameQuery, artistController.getArtistByName);
artistRouter.get('/', artistController.getAllArtists);
artistRouter.get('/:id', artistController.getArtistById);
artistRouter.post('/', artistController.addArtist);
artistRouter.put('/', artistController.matchNameQuery, artistController.updateArtistByName);
artistRouter.put('/:id', artistController.updateArtistById);
artistRouter.delete('/:id', artistController.deleteArtist);

export default artistRouter;
