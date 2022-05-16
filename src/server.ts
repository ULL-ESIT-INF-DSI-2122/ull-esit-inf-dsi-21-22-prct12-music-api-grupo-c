import dotenv from 'dotenv';
import { connect, ConnectOptions } from 'mongoose';
import app from './app';

dotenv.config();

// Database config
const uri: string = process.env.MAIN_DB_URL || '3000';

// @ts-ignore
const options: ConnectOptions = { useNewUrlParser: true, useUnifiedTopology: true };

connect(uri, options, (err) => {
  if (err) { console.log(err.message); }
});

// Create port
const port = process.env.PORT || 5000;

// Start server
export default app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
