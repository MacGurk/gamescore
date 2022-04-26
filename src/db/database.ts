import fs from 'fs';
import sqlite3 from 'sqlite3';

const dbFile = './.data/sqlite.db';
const db = new sqlite3.Database(dbFile);