import { Button }  from '@mui/material'
interface Props {
  text: string;
}

export default function CustomButton({text}: Props){
  return <Button>{text}</Button>
}
