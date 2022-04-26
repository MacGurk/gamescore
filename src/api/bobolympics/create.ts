import {Router, Request, Response} from "express";
import {BobolympicsScore} from "../../types/bobolympics";
import db from "../../db/db";



export default Router().post('/', async (req: Request, res: Response) => {
    const {username, score}= req.body as BobolympicsScore;
    console.log(req.body);
    console.log(`${username} ${score}`);
    db.insert("INSERT INTO bobolympics (Username, Score) VALUES (?, ?)", [username, score]);
    res.sendStatus(201);
});