import { 
  Card as MUICard, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Carousel, 
  Box,
  Stack
} from '../../../../../packages/ui/src'

const sonicImages= [
  'https://www.gameinformer.com/sites/default/files/styles/full/public/2022/04/11/afe977b6/sonicorigins.jpg',
  'https://www.truetrophies.com/imgs/070531/sonic-ps5.jpg',
  'https://i.ytimg.com/vi/aJ7DVCmsSPg/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-_gR6kBYu5XvMh7zuG3Zwf47upd5d7Q_vg&usqp=CAU'
]

const getRandomImageSonic = ()=> 
  sonicImages[Math.round(Math.random()*(sonicImages.length - 1))%sonicImages.length]
  

const Card = () => (<MUICard sx={{ background: 'white', maxWidth: 300, margin: 'auto' }} >
  <CardMedia
    height={188}
    component="img"
    image={getRandomImageSonic()}
    alt=''
  />
  <CardContent>
    sit voluptatem accusantium doloremque laudantium, totam rem aperiam magni...
  </CardContent>
  <CardActions sx={{ padding: 0 }}>
    <Button fullWidth label='Agregar al carrito' variant='outlined' />
  </CardActions>
</MUICard>)

const HeroItems = Array
  .from({ length: 6 })
  .map((_, index) => ({ id: index }))
  .map(({ id }) => <Card key={id} />)

const HeroItemsGroup: JSX.Element[][] = []

for(let i = 0; i < HeroItems.length; i+=3)
  HeroItemsGroup.push(HeroItems.slice(i, i+3))


const Hero = () => (
  <Box sx={{ width: '80vw' }}>
    <Carousel sx={{display:{md: 'block', xs: 'none'}}}>
      {
        HeroItemsGroup.map((items, index)=><Stack spacing={1} direction='row' key={index}>
        {items}
        </Stack>)
      }
    </Carousel>
    <Carousel sx={{display:{md: 'none', xs: 'block'}}}>
      {
        HeroItems
      }
    </Carousel>
  </Box>
)

export default Hero
