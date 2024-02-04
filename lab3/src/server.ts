import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Restaurant from '../model/Restaurant';
import restaurantSeed from '../seed/seed';

import RestaurantRouter from '../route/RestaurantRouter';

const SERVER_PORT: number = 3000;

// app config
const application: Application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
dotenv.config();

// routes
application.use('/restaurants', RestaurantRouter);

// db
const uri: string = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}:27017/`;

mongoose
  .connect(uri)
  .then(async (): Promise<void> => {
    console.log('[LOG] Connected to MongoDB');

    await Restaurant.insertMany(restaurantSeed);

    console.log('[LOG] Restaurant data seeded successfully');
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
