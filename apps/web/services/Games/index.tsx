import { AxiosInstance } from "axios";
import { GamesPaths } from "./constans";

export interface IOffer {
  imgUrl: string;
  description: string;
  price: number;
  title: string;
  id: string;
}

export interface GamesFilter {
  console?: string;
  isPopular?: boolean;
  page?: number;
  limit?: number;
}

export class Games {
  constructor(private client: AxiosInstance) {}

  async getMainOffers(gamesFilter?: GamesFilter) {
    const { data } = await this.client.get<IOffer[]>(GamesPaths.OFFERS, {
      params: gamesFilter,
    });
    return data;
  }
}
