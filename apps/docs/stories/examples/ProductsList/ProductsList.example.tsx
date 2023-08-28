import {  VirtuosoGrid } from 'react-virtuoso'
import { useState } from 'react';

import { CardProduct, Paper, Typography, styled } from "../../../../../packages/ui/src";
import { CardProductProps } from 'ui/src/molecules/CardProduct';

const defaultProducts = Array.from({ length: 10 }).map(()=>({
  alt: 'Spiderman',
  description: 'Juego de Spiderman',
  price: 188,
  src: 'https://m.media-amazon.com/images/I/815aKWcEkEL.jpg',
  title: 'Spiderman',
  previousPrice: 189
}))

const Loading = ()=> <Typography>Loading</Typography>

const ItemContent = (_index: number, product: CardProductProps)=> <CardProduct {...product}/>

//@ts-ignore
const ListContainer: any = styled('div')({
  display: 'flex',
  flexWrap: 'wrap'
})

//@ts-ignore
const ItemContainer: any = styled('div')(({theme})=>({
  [theme.breakpoints.down('md')]:{
    width:'unset'
  },
  [theme.breakpoints.up('md')]:{
    width: '50%'
  }
}))

export default function ProductsList(){
  const [products, setProducts] = useState(defaultProducts)

  const loadMore = ()=>{
    setTimeout(()=>{
      setProducts(prev=> [...prev, ...defaultProducts])
    }, 1000)
  }

  return (
    <Paper sx={{width: '100%', padding: '1rem', marginTop: 10}}>
      <VirtuosoGrid
        useWindowScroll
        style={{ height: 300 }}
        data={products}
        endReached={loadMore}
        overscan={10}
        itemContent={ItemContent}
        components={{ Footer: Loading, Item: ItemContainer, List: ListContainer  }}
      />
  </Paper>
  )
}
