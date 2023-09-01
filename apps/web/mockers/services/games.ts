import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { GamesPaths } from "../../services/Games/constans";
import { Games } from "../../services/Games";

const BASE_URL = "https://api.rawg.io/api/games";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

const mock = new MockAdapter(axiosClient);

mock.onGet(GamesPaths.OFFERS).reply(200, [
  {
    imgUrl:
      "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    description:
      "The Witcher 3: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
    price: 29.99,
  },
]);

export const fakeGameClient = new Games(axiosClient);
