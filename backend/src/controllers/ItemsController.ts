import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`, // web
        // image_url: `http://192.168.0.107:3333/uploads/${item.image}`, // mobile
        // image_url: `http://192.168.0.108:3333/uploads/${item.image}`, // mobile
      };
    });

    res.json(serializedItems);
  }
}

export default ItemsController;
