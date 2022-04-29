import express from 'express';
import { Request, Response } from 'express';
import api from './api';
import db from './db/db';
import cors from 'cors';

const app = express();
const PORT = 3000;

db.init();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})