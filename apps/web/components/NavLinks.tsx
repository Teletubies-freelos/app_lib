import { Link as MUILink, styled, useTheme } from "@mui/material";
import Link from "next/link";

export default function NavLinks() {
  const theme = useTheme();
  const NextLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <>
      <NextLink href="/estado-pedido" passHref>
        <MUILink
          sx={{
            display: { xs: "block", md: "none" },
            textDecoration: "none",
            fontSize: ".875rem",
            color: `${theme.palette.primary.main}`,
            fontWeight: 500,
          }}
        >
          Pedidos
        </MUILink>
      </NextLink>
      <NextLink href="/estado-pedido" passHref>
        <MUILink
          sx={{
            display: { xs: "none", md: "block" },
            textDecoration: "none",
            fontSize: ".875rem",
            color: "#444",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          Estado de Pedido
        </MUILink>
      </NextLink>
      <NextLink href="/estado-pedido" passHref>
        <MUILink
          sx={{
            display: { xs: "none", md: "block" },
            textDecoration: "none",
            fontSize: ".875rem",
            color: "#444",
            fontWeight: 500,
          }}
        >
          Tienda
        </MUILink>
      </NextLink>
    </>
  );
}
