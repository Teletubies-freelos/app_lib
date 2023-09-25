import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { dataContext } from '../../context/data';
import { Product } from '../product';
import { categoryId$, setIsOpenCategory } from '../../observables';

interface CategoryAcordionProps {
  id: string | number;
  name: string;
}

const CategoryAcordion = ({ id, name }: CategoryAcordionProps) => {
  const { products } = useContext(dataContext);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(
    ['products', id],
    async () =>
      await products?.getList({
        filters: {
          categoryId: id,
        },
        pagination: {
          limit: 100,
        },
      }),
    {
      enabled: isOpen,
    },
  );

  /*  const { data } = useInfiniteQuery({
    queryKey: ['products', id],
    queryFn: async ({ pageParam = 0 }) =>
      await products?.getList({
        filters: {
          categoryId: id,
        },
        pagination: {
          offset: pageParam,
        },
      }),
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });
 */
  const handleProductModal = ()=>{
    setIsOpenCategory(true)
    categoryId$.next(id)
  }

  console.log(data)

  return (
    <Accordion expanded={isOpen} onChange={() => setIsOpen(prev => !prev)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Button variant='contained' onClick={handleProductModal}>
          {' '}
          Anadir Productos
        </Button>

        {data?.map(({ name, price, description, id, price_offer }) => (
          <Product
            key={id}
            name={name}
            price={price}
            description={description}
            priceOffer={price_offer}
          />
        ))}

      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAcordion;
