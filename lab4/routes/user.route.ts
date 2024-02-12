import express, { Request, Response, Router } from 'express';
import UserModel from '../models/user.model';

const UserRoute: Router = express.Router();

UserRoute.post('/', async (request: Request, response: Response) => {
  try {
    const user = new UserModel(request.body);

    await user.save();

    if (!user)
      return response
        .status(400)
        .send({ error: 'Bad Request', message: 'Please enter proper fields' });

    return response
      .status(201)
      .send({ message: 'Successfully created user', user });
  } catch (error) {
    console.error(error);
    response.status(500).send({ error });
  }
});

export default UserRoute;
