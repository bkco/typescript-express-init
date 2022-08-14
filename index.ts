import dotenv from 'dotenv';
import {Express, Request, Response} from "express";
import express from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

import { Dog } from './interface-impl';

app.get('/', (req: Request, res: Response) => {

  const dogInstance = new Dog('Lassie', 'Bow wow wow!');

  const name = dogInstance.getAnimalName();

  const helloMessage = dogInstance.getHelloMsg();

  const result = dogInstance.getMessageAsync();

  res.send('Express TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});