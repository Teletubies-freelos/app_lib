import { type PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline } from '@mui/material'
import { defaultTheme } from '../theme'

export default function WithTheme({ children }: PropsWithChildren){
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
