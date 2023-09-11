import { Link as MUILink, styled, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const theme = useTheme();
  const CustomLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <>
      <CustomLink to="/estado-pedido">
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
      </CustomLink>
      <CustomLink to="/estado-pedido">
        <MUILink
          sx={{
            display: { xs: "none", md: "block" },
            textDecoration: "none",
            fontSize: ".875rem",
            color: `${theme.palette.text.primary} !important`,
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          Estado de Pedido
        </MUILink>
      </CustomLink>
      <CustomLink to="/estado-pedido">
        <MUILink
          sx={{
            display: { xs: "none", md: "block" },
            textDecoration: "none",
            fontSize: ".875rem",
            color: `${theme.palette.text.primary} !important`,
            fontWeight: 500,
          }}
        >
          Tienda
        </MUILink>
      </CustomLink>
    </>
  );
}
