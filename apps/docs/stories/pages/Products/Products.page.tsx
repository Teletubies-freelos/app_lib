import { Virtuoso } from 'react-virtuoso'
import { CardProduct, Paper, Typography } from "../../../../../packages/ui/src";
import Header from "../../examples/Header/Header.example";
import { CardProductProps } from 'ui/src/molecules/CardProduct';
import { useState } from 'react';

const defaultProducts = Array.from({length: 10}).map(()=>({
  alt: 'Spiderman',
  description: 'Juego de Spiderman',
  price: 188,
  src: 'https://m.media-amazon.com/images/I/815aKWcEkEL.jpg',
  title: 'Spiderman',
  previousPrice: 189
}))

const Loading = ()=> <Typography>Loading</Typography>

const ItemContent = (_index: number, product: CardProductProps)=> <CardProduct {...product}/>

export default function Products(){
  const [products, setProducts] = useState(defaultProducts)

  const loadMore = ()=>{
    setTimeout(()=>{
      setProducts(prev=> [...prev, ...defaultProducts])
    }, 1000)
  }

  return (
    <>
      <Header />
      <Paper sx={{width: '100%', padding: '1rem', marginTop: 10}}>
        <Virtuoso
          useWindowScroll
          style={{ height: 300 }}
          data={products}
          endReached={loadMore}
          overscan={10}
          itemContent={ItemContent}
          components={{ Footer: Loading }}
        />
      </Paper>
    </>
  )
}
