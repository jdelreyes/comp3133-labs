import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const SERVER_PORT: number = 3000;

// app config
const application: Application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
dotenv.config();

// routes
import UserRoute from '../routes/user.route';
application.use('/users', UserRoute);

// db
const uri: string = `${process.env.MONGODB_URI}`;

mongoose
  .connect(uri)
  .then(async (): Promise<void> => {
    console.log('[LOG] Connected to MongoDB');
  })
  .catch((err): void => {
    console.error('[ERROR] Failed to connect to MongoDB', err);
    process.exit();
  });

application.get('/', (request: Request, response: Response): void => {
  response.status(200).send({});
});

application.listen(SERVER_PORT, (): void => {
  console.log(`[LOG] Server is running at port ${SERVER_PORT}`);
});
