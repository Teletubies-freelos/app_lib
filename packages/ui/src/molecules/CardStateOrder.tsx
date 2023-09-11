import { Box, List, ListItem, Typography } from "@mui/material";

interface CardStateOrderProps {
  img: JSX.Element;
  title: string;
  price: string;
  quantity?: JSX.Element;
}

export default function CardStateOrder({
  img,
  title,
  price,
  quantity,
}: CardStateOrderProps) {
  return (
    <List
      sx={(theme) => ({
        background: theme.palette.background.default,
        padding: "0 ",
        width: "100%",
        borderRadius: ".5rem",
      })}
    >
      <ListItem
        sx={{
          height: "auto",
          maxHeight: "4.75rem",
          alignItems: "center",
        }}
      >
        {img}
        <Box width="100%" display="flex" alignItems="center">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              marginLeft: "1rem",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                height: "100%",
                fontSize: "1rem !important",
              }}
            >
              {title}
            </Typography>
            {quantity}
            <Typography
              component="span"
              variant="body1"
              color="text.primary"
              sx={{ fontSize: "1.075rem", fontWeight: 500 }}
            >
              {price}
            </Typography>
          </Box>
        </Box>
      </ListItem>
    </List>
  );
}
