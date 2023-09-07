import { SxProps, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";

interface CarouselHeroProps {
  children: JSX.Element[];
  sx: SxProps;
}

const CarouselHero = ({ children, sx }: CarouselHeroProps) => {
  const theme = useTheme();

  return (
    <Carousel
      sx={{
        "& .navButtonsClassName": {
          background: "none !important",
          color: theme.palette.text.primary,
          border: "none",
        },
        "& .activeIndicatorClassName": {
          color: `${theme.palette.primary.main} !important`,
          border: "none",
        },
        "& .indicatorClassName": {
          color: theme.palette.background.paper,
          "&:hover": {
            color: `${theme.palette.primary.main} !important`,
          },
        },
        ...sx,
      }}
      navButtonsProps={{ className: "navButtonsClassName" }}
      activeIndicatorIconButtonProps={{
        className: "activeIndicatorClassName",
      }}
      indicatorIconButtonProps={{ className: "indicatorClassName" }}
    >
      {children}
    </Carousel>
  );
};

export default CarouselHero;
