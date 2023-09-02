import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Card as MUICard,
} from "@mui/material";
import { MouseEventHandler } from "react";

export interface CardHeroProps {
  image: string;
  description: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CardHero = ({ image, alt, onClick, description }: CardHeroProps) => (
  <MUICard
    sx={{
      background: "white",
      maxWidth: 300,
      margin: "auto !important",
      boxShadow: "none",
    }}
  >
    <CardMedia
      height={188}
      component="img"
      image={image}
      sx={{ borderRadius: ".5rem" }}
      alt={alt}
    />
    <CardContent sx={{ padding: ".5rem" }}>{description}</CardContent>
    <CardActions sx={{ padding: 0 }}>
      <Button
        fullWidth
        variant="outlined"
        sx={{ "&:hover": { background: "#7339FF", color: "#E3E9FF" } }}
        onClick={onClick}
      >
        Agregar al carrito
      </Button>
    </CardActions>
  </MUICard>
);

export default CardHero;
