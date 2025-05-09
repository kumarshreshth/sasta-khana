import express from 'express';
import cookieParser from 'cookie-parser';
import { connectDb } from './src/lib/db.js';
import authRoute from './src/routes/authRoute.js';
import searchRoute from './src/routes/searchRoute.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api/auth', authRoute);
app.use('/api/search', searchRoute);

app.listen(PORT, () => {
  console.log('listening to Port ' + PORT);
  connectDb();
});
