import { Link } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Stack, Typography, styled } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { FacebookLogo, InstagramLogo } from "../../../../packages/ui/src";

interface LiItemProps {
  label: string
}

export const Label = styled(Link)`
  text-decoration: none;
`;

function LiItem({ label }: LiItemProps) {
  return (
    <Typography
      variant="h3"
      sx={{ color: "text.emphasized", fontSize: 18, fontWeight: 500 }}
    >
      {label}
    </Typography>
  )
}

export default function Menu() {
  return (
    <Paper sx={{
      padding: { md: "36px 120px", xs: "2.25rem 1.5rem"},
      background: "background.subdued",
      width: { md: 667, xs: 320 },
    }}
    >
      <Stack sx={{ gap: "1.5rem" }}>
        <Label to="/">
          <LiItem label="Categorias" />
        </Label>
        <Accordion
          sx={{
            background: "transparent",
            boxShadow: "none",
            margin: "0 !important"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ 
              padding: 0, margin: 0, minHeight: "0 !important",  
              "& .MuiAccordionSummary-content": {
                margin: "0 !important"
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                color: "text.secondary"
              }
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "18px" }}>Categorias</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ padding: "1rem 0 0 36px" }}
          >
            <Stack sx={{ gap: "1rem" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Label to="/" key={i}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 400,
                      color: "text.primary"
                    }}
                  >
                    Subcategoría 1
                  </Typography>
                </Label>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Label to="/estado-pedido">
          <LiItem label="Estado de pedido" />
        </Label>
        <Label to="/terminos">
          <LiItem label="Terminos y condiciones" />
        </Label>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem", alignItems: "center" }}>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>Síguenos</Typography>

          <Link to="https://www.facebook.com" target="_blank">
            <FacebookLogo />
          </Link>
          <Link to="https://www.instagram.com" target="_blank">
            <InstagramLogo />
          </Link>
        </Box>
      </Stack>
    </Paper>
  );
}
