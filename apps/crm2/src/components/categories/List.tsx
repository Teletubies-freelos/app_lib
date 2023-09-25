import { Stack } from '@mui/material';
import { useContext } from 'react';
import { dataContext } from '../../context/data';
import { useQuery } from '@tanstack/react-query';
import CategoryAcordion from './CategoryAcordion';

const List = () => {
  const { categories } = useContext(dataContext);
  const { data: dataCategories } = useQuery(
    ['categories'],
    async () =>
      await categories?.list({ limit: 10, offset: 0, orderBy: 'desc' }),
  );

  return (
    <Stack>
      {dataCategories?.map(({ category_id, name }) => (
        <CategoryAcordion key={category_id} name={name} id={category_id} />
      ))}
    </Stack>
  );
};

export default List;
