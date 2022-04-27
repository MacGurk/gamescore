import {Router, Request, Response} from "express";
import {BobolympicsScore} from "../../types/bobolympics";
import db from "../../db/db";

export default Router().post('/', async (req: Request, res: Response) => {
    const newScore = req.body as BobolympicsScore;
    if (newScore.username && newScore.score) {
        await db.insert("INSERT INTO bobolympics (Username, Score) VALUES (?, ?)", [newScore.username, newScore.score]);
        res.status(201).send(newScore);
    } else {
        res.sendStatus(400);
    }
});