import { Switch } from "@mui/material";

// @ts-ignore
import moonSvg from './moon.svg'

export interface ColorSwitchProps{
  moonUrl?: string;
  overrideCheckBg?: boolean;
}

export default function ColorSwitch ({moonUrl = `url(${moonSvg})`, overrideCheckBg}: ColorSwitchProps){

  return <Switch sx={(theme)=>({
    padding: 0.2,
    '& .MuiSwitch-track':{
      borderRadius: '2rem',
      borderColor: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper + (overrideCheckBg? ' !important': ''),
      borderWidth: '0.1rem',
      borderStyle: 'solid'
    },
    '& .MuiSwitch-thumb':{
      backgroundColor: theme.palette.primary.main
    },
    '& .Mui-checked':{
      '& .MuiSwitch-thumb':{
        background: moonUrl,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }
    }
  })}/>
}