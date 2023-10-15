import { Check } from "@mui/icons-material";
import { Box, Step, StepLabel, Stepper, SxProps } from "@mui/material";

const StepIcon = () => (
  <Check
    sx={(theme) => ({
      padding: "2px",
      background: theme.palette.common.white,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      borderRadius: "1rem",
      fontSize: "1.2rem",
    })}
  />
);

export default function StepStatus({
  steps,
  sx,
}: {
  steps: string[];
  sx?: SxProps;
}) {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon} color="red">
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
