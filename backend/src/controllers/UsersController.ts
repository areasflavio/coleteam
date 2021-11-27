import { Request, Response } from 'express';
import knex from '../database/connection';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    const insertedUser = await knex('users').insert(user);

    return res.json(insertedUser);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await knex<User>('users')
      .where('id', id)
      .first()
      .columns(['id', 'name', 'email']);

    if (!user) return res.status(400).json({ message: 'User not found!' });

    return res.json(user);
  }
}

export default UsersController;
