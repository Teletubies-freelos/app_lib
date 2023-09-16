import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import {
  Button,
  CardStateOrder,
  LabelStepStatus,
  Quantity,
} from "../../../../../../packages/ui/src";
import totalMoney from "../common/total.svg";
import { cartClient } from "../../../modules";
import { useQuery } from "@tanstack/react-query";


interface ImageProps{
  url: string
}

const Image = ({ url }: ImageProps)=> (
  <Box display="flex" height={"4.75rem"} alignItems={"center"}>
    <img
      src={url}
      srcSet={url}
      alt={url}
      style={{
        height: "80%",
        width: "100%",
        objectFit: "contain",
      }}
      loading="lazy"
    />
  </Box>
);
const Loading = ()=> (
  <Box width={1} height={1} display="grid" sx={{placeItems:"center"}}>
    <CircularProgress color="info" />
  </Box>
)

export default function BodyCart() {
  const { data: total, isFetching: isLoadingTotal } = useQuery({
    queryKey: ['total'],
    queryFn: ()=> cartClient.getTotalProductsPrice(),
    cacheTime: 0,
    staleTime: 0
  })

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ['products'],
    queryFn:()=> cartClient.getProducts(),
    cacheTime: 0,
    staleTime: 0
  })

   return (
    <>
      <Box 
        display="flex" 
        flexDirection="column" 
        gap="1rem" 
        height={'60vh'} 
        sx={{overflowY: 'scroll'}}
      >
        {
          isLoading || isLoadingTotal ? <Loading /> : data?.map(({imageUrl, name, price, quantity, id}) => (
            <CardStateOrder
              key={id}
              img={<Image url={imageUrl}/>}
              title={name}
              price={price}
              quantity={
                <Quantity
                  quantity={quantity}
                  changeQuantity={() => 4}
                  onDelete={() => 5}
                />
              }
            />
          ))
        }
      </Box>
      <LabelStepStatus
        property="Total"
        value={total?.toFixed(2)}
        icon={<img src={totalMoney} alt="money" />}
        sx={{
          fontSize: "1rem !important",
          marginTop: "1.5rem",
        }}
      />
      <Stack>
        <Typography
          textAlign="center"
          variant="body2"
          fontSize="1rem"
          padding="1rem 0 .5rem 0"
        >
          Selecciona el tipo de entrega
        </Typography>
        <Box display="flex" gap=".5rem">
          <Button
            fullWidth
            label="Recojo en tienda"
            variant="outlined"
            sx={{ height: "2.8rem" }}
          />
          <Button
            fullWidth
            label="Entrega a domicilio"
            variant="contained"
            sx={{ height: "2.8rem" }}
          />
        </Box>
      </Stack>
    </>
  );
}
