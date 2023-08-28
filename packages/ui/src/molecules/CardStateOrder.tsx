import { Box, List, ListItem, ListItemText, Typography } from "..";

export default function CardStateOrder() {
  return (
    <List sx={{ paddingLeft: "0 ", width: "100%" }}>
      <ListItem
        sx={{
          height: "auto",
          maxHeight: "4.75rem",
          padding: "0 !important",
          alignItems: { xs: "flex-start", sm: "center" },
        }}
      >
        <Box
          height={"4.75rem"}
          alignItems={"center"}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <img
            src={"https://m.media-amazon.com/images/I/815aKWcEkEL.jpg"}
            srcSet={`https://m.media-amazon.com/images/I/815aKWcEkEL.jpg`}
            alt={"image"}
            style={{
              height: "80%",
              width: "100%",
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </Box>
        <ListItemText
          primary="Spidermaan Marvel PS4"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            marginLeft: "1rem",
            fontSize: "1rem !important",
          }}
          secondary={
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
              sx={{ fontSize: "1.075rem" }}
            >
              S/ 120.00
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}
