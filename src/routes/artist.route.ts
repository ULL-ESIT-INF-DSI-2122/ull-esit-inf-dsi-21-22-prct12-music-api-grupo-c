import { Router } from 'express';
import artistController from '../controllers/artist.controller';

const artistRouter: Router = Router();

artistRouter.get('/', artistController.matchNameQuery, artistController.getArtistByName);
artistRouter.get('/', artistController.getAllArtists);
artistRouter.get('/:id', artistController.getArtistById);
artistRouter.post('/', artistController.addArtist);
artistRouter.put('/:id', artistController.updateArtist);
artistRouter.delete('/:id', artistController.deleteArtist);

export default artistRouter;
