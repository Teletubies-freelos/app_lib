import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { GamesPaths } from "../../services/Games/constans";
import { Games } from "../../services/Games";
import { fakeDescriptionCarousel, fakeImageCarousel, fakePrice } from "./utils";

const BASE_URL = "https://api.rawg.io/api/games";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

const mock = new MockAdapter(axiosClient);

mock.onGet(GamesPaths.OFFERS).reply(200, [
  {
    imgUrl: fakeImageCarousel,
    description: fakeDescriptionCarousel,
    price: fakePrice,
  },
]);

export const fakeGameClient = new Games(axiosClient);
