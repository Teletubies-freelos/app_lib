import { Box, Typography, SxProps } from "..";
import { tss } from "tss-react/mui";

export interface LabelStepStatusProps {
  property: string;
  value?: string;
  sx?: SxProps;
}

const LabelStatusStyles = tss.create(({ theme }) => ({
  propertyStyle: {
    fontWeight: 600,
  },
  valueStyle: {
    color: theme.palette.text.secondary,
  },
}));

export default function LabelStepStatus({
  property,
  value,
  sx,
}: LabelStepStatusProps) {
  const { classes } = LabelStatusStyles();

  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "flex-start", sm: "space-between" }}
      alignItems={{ xs: "flex-start", sm: "center" }}
      sx={{ background: "#F8FBFF", padding: ".5rem 1rem", ...sx }}
    >
      <Typography
        className={classes.propertyStyle}
        variant={"h5"}
        component={"h5"}
        sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem" } }}
      >
        {property}
      </Typography>
      {value && <Typography className={classes.valueStyle}>{value}</Typography>}
    </Box>
  );
}
