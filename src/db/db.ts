import sqlite3 from 'sqlite3';
import {BobolympicsScore} from "../types/bobolympics";

const dbFile = 'gamescore.sqlite';
const db = new sqlite3.Database(dbFile);

function init(): void {
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS bobolympics (Username VARCHAR(255), Score FLOAT)");
    })
}

function insert(sql: string, params: any): void {
    db.prepare(sql).run(params);
}

function query(sql: string): Promise<BobolympicsScore[]> {
    return new Promise((resolve, reject) => {
        db.all(sql, (err, rows) => {
            resolve(rows);
        });
    })

}

export = {
    init,
    insert,
    query
}