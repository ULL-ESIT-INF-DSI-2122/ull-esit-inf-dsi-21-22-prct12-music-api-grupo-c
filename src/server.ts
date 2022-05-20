import { connect, ConnectOptions } from 'mongoose';
import app from './app';

// Database config | atlas environment var  OR  local DB for development
const uri: string = process.env.MAIN_DB_URL || 'mongodb://localhost:27017/';

const options: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

/**
 * # MongoDB connection
 * This Promise uses an automatic selected uri depending on the environment
 */
// MongoDB's connection promise
connect(uri, options)
  .then(() => {
    console.log(`Database connection successful at ${uri}`);
  })
  .catch((err) => {
    console.error(err.message);
  });

// Create API Server port
const port = process.env.PORT || 5000;

// Start server Application
/**
 * # Express server instantiation
 * This object is started after port configuration and mongodb connection
 */
export default app.listen(port, () => {
  console.log(`API started at port ${port}`);
});
