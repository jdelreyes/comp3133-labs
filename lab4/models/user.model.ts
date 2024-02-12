import { model, Schema } from 'mongoose';
import { UserEntity } from '../entity/user.entity';

const validateUsername = (username: string) => {
  return username.length >= 4;
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateCity = (city: string) => {
  const cityRegex = /^[a-zA-Z\s]+$/;
  return cityRegex.test(city);
};

const validateWebURL = (web: string) => {
  const webURLRegex = /^(http|https):\/\/[^ "]+$/;
  return webURLRegex.test(web);
};

const validateZipCode = (zip: string) => {
  const zipRegex = /^\d{5}-\d{4}$/;
  return zipRegex.test(zip);
};

const validatePhone = (phone: string) => {
  const phoneRegex = /^1-\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

const userSchema: Schema<UserEntity> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateUsername,
      message: 'Invalid username',
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validateEmail,
      message: 'Invalid email address',
    },
  },
  address: {
    city: {
      type: String,
      required: true,
      validate: {
        validator: validateCity,
        message: 'City name can only contain alphabets and spaces',
      },
    },
    zipcode: {
      type: String,
      required: true,
      validate: {
        validator: validateZipCode,
        message: 'Invalid zip code format (should be like 12345-1234)',
      },
    },
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: validateWebURL,
      message: 'Invalid web URL',
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: validatePhone,
      message: 'Invalid phone format (should be like 1-123-123-1234)',
    },
  },
});

const UserModel = model<UserEntity>('UserModel', userSchema);

export default UserModel;
