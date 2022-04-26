import {Router} from "express";
import create from "./create";
import list from "./list";

export default Router().post('/', create).get('/', list);