import { NEXT_PUBLC_API_GAMES } from "../utils/configEnv";
import { Games } from "../services/Games";
import axios from "axios";

export const mainClient = axios.create({ baseURL: NEXT_PUBLC_API_GAMES });
export const games = new Games(mainClient);
