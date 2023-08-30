import { Check } from "@mui/icons-material";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const StepIcon = () => (
  <Check
    sx={{
      padding: "2px",
      background: "#fff",
      border: "1px solid #7339FF",
      color: "#7339FF",
      borderRadius: "1rem",
      fontSize: "1.2rem",
    }}
  />
);

export default function StepStatus({ steps }: { steps: string[] }) {
  return (
    <Box sx={{ width: "100%" }}>
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
