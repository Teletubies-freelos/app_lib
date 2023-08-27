import { Add } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { MouseEventHandler } from 'react';

export interface CardProductProps{
  alt: string;
  src: string;
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  onAdd?: MouseEventHandler<HTMLButtonElement>
}

export default function CardProduct({
  alt, src, description, price, title, previousPrice, onAdd
}:CardProductProps){
  return (
    <Card sx={{ backgroundColor: 'unset', margin: 2}}>
      <Box display={'flex'}>
        <Box width={'30%'} >
          <CardMedia

            component='img'
            alt={alt}
            src={src}
          />
        </Box>
        <CardContent>
          <Typography variant='h1'>{title}</Typography>
          <Typography>{description}</Typography>
          {!!previousPrice && <Typography sx={{textDecoration: 'line-through'}}>{previousPrice}</Typography>}
          <Typography>{price}</Typography>
        </CardContent>

      </Box>
      <Box display='flex' justifyContent='flex-end' height={0}>
        {/* TODO: try to use translate instead to avoid shift layout */}
        <Button 
          onClick={onAdd} 
          variant='contained'  
          sx={{position: 'relative', bottom: '4rem', right: '2rem', minHeight: 40}}>
          <Add />
        </Button>
      </Box>
    </Card>
  )
}
