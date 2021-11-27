import { Request, Response } from 'express';
import knex from '../database/connection';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

class SessionController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await knex<User>('users').where('email', email).first();

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (String(password) !== user.password) {
      return res.status(400).json({ error: 'Wrong password' });
    }

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  }
}

export default SessionController;
