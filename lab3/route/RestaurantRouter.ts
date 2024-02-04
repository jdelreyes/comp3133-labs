import express, { Request, Response, Router } from 'express';
import Restaurant from '../model/Restaurant';
import { IRestaurant } from '../interface/IRestaurant';

const RestaurantRouter: Router = express.Router();

RestaurantRouter.get(
  '/',
  async (request: Request, response: Response): Promise<void> => {
    try {
      const { sortBy } = request.query;

      const sortDirection =
        sortBy && sortBy.toString().toUpperCase() === 'DESC' ? -1 : 1;

      const selectedColumns = [
        '_id',
        'cuisine',
        'name',
        'city',
        'restaurant_id',
      ];

      const restaurantList = await Restaurant.find({})
        .select(selectedColumns.join(' '))
        .sort({ restaurant_id: sortDirection });

      response.status(200).send(restaurantList);
    } catch (error) {
      console.error('[ERROR] Error fetching all restaurants:', error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  },
);

RestaurantRouter.get(
  '/cuisine/:cuisine',
  async (request: Request, response: Response) => {
    const { cuisine } = request.params;

    try {
      const restaurantList = await Restaurant.find({ cuisine: cuisine });
      response.status(200).send(restaurantList);
    } catch (error) {
      console.error('[ERROR] Error fetching restaurants by cuisine:', error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  },
);

RestaurantRouter.get(
  '/Delicatessen',
  async (request: Request, response: Response) => {
    try {
      const restaurantList = await Restaurant.find({
        cuisine: 'Delicatessen',
        city: { $ne: 'Brooklyn' },
      })
        .select(['cuisine', 'name', 'city'])
        .sort({ name: 1 });

      response.status(200).send(restaurantList);
    } catch (error) {
      console.error('[ERROR] Error fetching Delicatessen restaurants:', error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  },
);

export default RestaurantRouter;
