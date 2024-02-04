import { Document } from 'mongoose';

export interface IRestaurant extends Document {
  address: {
    building: string;
    street: string;
    zipcode: string;
  };
  city: string;
  cuisine: string;
  name: string;
  restaurant_id: string;
}
