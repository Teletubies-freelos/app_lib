import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { GamesPaths } from "../../services/Games/constans";
import { GamesAxios } from "../../services/Games";
import { seedCard } from "./utils";

const BASE_URL = "https://api.rawg.io/api/games";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

const mock = new MockAdapter(axiosClient);
const fakeDataCarousel = seedCard(5);

mock.onGet(GamesPaths.OFFERS).reply(200, fakeDataCarousel);

export const fakeGameClient = new GamesAxios(axiosClient);
