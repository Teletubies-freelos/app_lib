import { AxiosInstance } from "axios";
import { GamesPaths } from "./constans";

interface IOffer {
  imgUrl: string;
  description: string;
  price: number;
}

export class Games {
  constructor(private client: AxiosInstance) {}

  async getMainOffers() {
    const { data } = await this.client.get<IOffer[]>(GamesPaths.OFFERS);
    return data;
  }
}
