import { CardHero } from "ui";
import { IOffer } from "../services/Games";

export const carouseItem = ({ description, imgUrl, id }: IOffer) => (
  <CardHero
    key={id}
    alt={description}
    description={description}
    image={imgUrl}
    onClick={() => 5}
  />
);
