import { model, Schema } from 'mongoose';
import { IRestaurant } from '../interface/IRestaurant';

const restaurantSchema: Schema = new Schema<IRestaurant>({
  address: {
    building: {
      type: String,
    },
    street: {
      type: String,
    },
    zipcode: {
      type: String,
    },
  },
  city: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  name: { type: String },
  restaurant_id: { type: String },
});

const Restaurant = model<IRestaurant>('Restaurant', restaurantSchema);

export default Restaurant;
