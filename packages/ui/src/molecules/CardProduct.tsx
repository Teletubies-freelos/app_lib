import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MouseEventHandler } from "react";

export interface CardProductProps {
  alt: string;
  src: string;
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  onAdd?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const cardStyles = {
  backgroundColor: "#fff",
  minWidth: "20rem",
  boxShadow: "none",
  borderRadius: "1rem",
};

export default function CardProduct({
  alt,
  src,
  description,
  price,
  title,
  previousPrice,
  onAdd,
  className,
}: CardProductProps) {
  return (
    <Card sx={cardStyles} className={className}>
      <Box display={"flex"}>
        <Box
          width={"30%"}
          sx={{ display: "grid", placeItems: "center", height: "10rem" }}
        >
          <CardMedia
            component="img"
            alt={alt}
            src={src}
            height={"80%"}
            width={"100%"}
            sx={{
              objectFit: "contain",
            }}
          />
        </Box>
        <CardContent
          sx={{
            padding: "1rem !important",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Box>
          <Box>
            {!!previousPrice && (
              <Typography
                variant="body2"
                sx={{ textDecoration: "line-through" }}
              >
                S/ {previousPrice}
              </Typography>
            )}
            <Typography variant="body2" sx={{ fontSize: "1.1em" }}>
              S/ {price}
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        height={0}
        alignItems="start"
      >
        {/* TODO: try to use translate instead to avoid shift layout */}
        <Button
          onClick={onAdd}
          variant="contained"
          sx={{
            position: "relative",
            bottom: "3.2rem",
            right: "2rem",
            height: "2.4rem",
            minWidth: "unset",
            aspectRatio: 1,
            padding: 0,
          }}
        >
          <Add />
        </Button>
      </Box>
    </Card>
  );
}
