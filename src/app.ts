import express from 'express';
import path from 'path';

// ROUTES
import songs from './routes/song.route';
import artists from './routes/artist.route';
// ------

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API
app.get('/', (_: express.Request, res: express.Response) => {
  res.status(200).send('<h1>API PARA LA PRÁCTICA 12 - GRUPO C</h1>');
});

app.use('/songs', songs);
app.use('/artists', artists);

// Find 404
app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send();
  next();
});

/**
 * # Express App
 *  This object collects all the packages used and configured in Express for this project as well as
 *  it groups all the API routers
 *
 *  ## Used packages:
 *  - express.json
 *  - express.static
 *  - artists
 *  - songs
 *  - playlist
 *
 *  ## Routes in the App
 *  - GET: `/` (base route of the API)
 *  - `/artists/` (all artist related requests)
 *  - `/songs/` (all artist related requests)
 *  - `/playlists/` (all artist related requests)
 */
export default app;
