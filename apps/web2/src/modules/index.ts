import { Games } from "../services/Games";
import axios from "axios";

export const mainClient = axios.create({ baseURL: "/" });
export const games = new Games(mainClient);
