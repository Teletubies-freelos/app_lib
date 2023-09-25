import { TextField, TextFieldProps } from '@mui/material';

interface CustomTextFieldProps {
  label: string;
  type?: 'text' | 'email';
  width?: string;
  textfieldProps?: TextFieldProps;
}

export default function CustomTextField({
  label,
  type,
  width,
  textfieldProps,
}: CustomTextFieldProps) {
  return (
    <TextField
      id='standard-basic'
      variant='standard'
      type={type}
      label={label}
      inputMode={type}
      sx={({ palette }) => ({
        width: { width },
        background: `${palette.background.default} !important`,
        border: `1px solid ${palette.primary.main} !important`,
        borderRadius: '0.3rem !important',
        padding: '0.5rem  !important',
        '& .MuiFormLabel-root': {
          left: '.5rem',
          top: '0.5rem !important',
          '& .MuiInputLabel-root': {
            top: '0.5rem !important',
          },
          '&.Mui-focused': {
            top: '0.5rem !important',
          },
        },
        '& .MuiInputBase-input': {
          height: '.5rem !important',
        },
        '& .MuiInputBase-root': {
          padding: '0 !important',
          border: 'none !important',
          '&:after': {
            border: 'none !important',
          },
          '&:before': {
            border: 'none !important',
          },
        },
      })}
      {...textfieldProps}
    />
  );
}
