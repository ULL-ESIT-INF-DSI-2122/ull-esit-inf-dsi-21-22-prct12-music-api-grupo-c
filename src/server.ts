import { connect, ConnectOptions } from 'mongoose';
import app from './app';

// Database config | atlas environment var  OR  local DB for development
const uri: string = process.env.MAIN_DB_URL || 'mongodb://localhost:27017/';

const options: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// MongoDB's connection promise
connect(uri, options)
  .then(() => {
    console.log(`Database connection successful at ${uri}`);
  })
  .catch((err) => {
    console.error(err.message);
  });
>>>>>>> d76d54050062c3e1ddd9ed0d4e6fef371dfbad95

// Create API Server port
const port = process.env.PORT || 5000;

// Start server Application
export default app.listen(port, () => {
  console.log(`API started at port ${port}`);
});
