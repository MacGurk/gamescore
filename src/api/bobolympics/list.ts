import {Router, Request, Response} from "express";
import db from '../../db/db';

export default Router().get('/', async (req: Request, res: Response) => {
    const result = await db.query("SELECT * FROM bobolympics ORDER BY Score LIMIT 10");
    res.status(200).send(result);
});