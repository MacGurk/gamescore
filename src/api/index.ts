import { Router } from 'express';
import bobolympics from "./bobolympics";

export default Router().use('/bobolympics', bobolympics);