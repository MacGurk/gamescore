import {Router, Request, Response} from "express";
import db from '../../db/db';

export default Router().get('/', async (req: Request, res: Response) => {
    console.log("get!");
    const result = await db.query("SELECT * FROM bobolympics");
    console.log(result);
    res.send(result).status(200);
});