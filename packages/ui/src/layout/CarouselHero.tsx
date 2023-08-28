'use client'

import Carousel from "react-material-ui-carousel";
import { tss } from "tss-react/mui";
import { SxProps } from "..";

interface CarouselHeroProps {
  children: JSX.Element[];
  sx: SxProps;
}

const carouselStyles = tss.create(({ theme }) => ({
  navButtons: {
    background: "none !important",
    color: theme.palette.text.primary,
  },
  activeIndicator: {
    color: theme.palette.primary.main,
  },
  indicator: {
    color: theme.palette.background.paper,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const CarouselHero = ({ children, sx }: CarouselHeroProps) => {
  const { classes } = carouselStyles();

  return (
    <Carousel
      sx={sx}
      navButtonsProps={{
        className: classes.navButtons,
      }}
      activeIndicatorIconButtonProps={{
        className: classes.activeIndicator,
      }}
      indicatorIconButtonProps={{
        className: classes.indicator,
      }}
    >
      {children}
    </Carousel>
  );
};

export default CarouselHero;
