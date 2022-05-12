import express from 'express';
import path from 'path';

// ROUTES
// import songs from 'route/songs.router';
// ------

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API
app.get('/', (_: express.Request, res: express.Response) => {
  res.status(200).send('<h1>API PARA LA PRÁCTICA 12 - GRUPO C</h1>');
});

// app.use('/songs', songs);

// Find 404
app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send();
  next();
});

export default app;
