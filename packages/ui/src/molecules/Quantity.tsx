import { Box } from "..";

export default function Quantity() {
  return (
    <Box
      sx={{
        position: { xs: "absolute", sm: "static" },
        right: { xs: "2rem", sm: "unset" },
        bottom: { xs: "50%", sm: "unset" },
        transform: { xs: "translate(50%,50%)", sm: "unset" },
      }}
    >
      Hola
    </Box>
  );
}
