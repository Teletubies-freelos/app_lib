import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { dataContext } from '../../context/data';
import { Product } from '../product';

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
  return (
    <Accordion expanded={isOpen} onChange={() => setIsOpen(true)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {data?.map(({ name, price, description, id, price_offer }) => (
            <Product
              key={id}
              name={name}
              price={price}
              description={description}
              priceOffer={price_offer}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAcordion;
