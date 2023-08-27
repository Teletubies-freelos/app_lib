import { Card  as MUICard, CardMedia, CardContent, CardActions, Button, Carousel } from '../../../../../packages/ui/src'


const Card = ()=> (<MUICard sx={{background: 'white'}} >
    <CardMedia
      height={188} 
      component="img"
      image="https://www.truetrophies.com/imgs/070531/sonic-ps5.jpg"
      alt=''
     />
    <CardContent>
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam magni...
    </CardContent>
    <CardActions sx={{padding: 0}}>
      <Button fullWidth label='Agregar al carrito' variant='outlined' />
    </CardActions>
  </MUICard>)

const HeroItems = ()=> <>{Array
  .from({ length: 4 })
  .map((_, index)=>({id: index}))
  .map(({id})=> <Card key={id} />)}
  </>
  
export const Hero = () => (
  <Carousel>
    <HeroItems />
  </Carousel>
)
