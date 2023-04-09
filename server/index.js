
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('<h1>Step into a world of Illusionink!</h1>'); // Update to send HTML response
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL); // Pass MONGODB_URL as argument
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
