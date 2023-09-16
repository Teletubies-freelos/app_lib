import { Box, CircularProgress, List, Stack, Typography } from "@mui/material";
import {
  Button,
  CardStateOrder,
  LabelStepStatus,
  Quantity,
} from "../../../../../../packages/ui/src";
import totalMoney from "../common/total.svg";

import { setIsCartShop, setIsPickupStore } from "../../../observables";
import { useGetIndexedDb } from "../../../hooks/useGetIndexedDb";
import { useContext, useState } from "react";
import { cartClient } from "../../../modules";
import { cartContext } from "../../../context/cartContext";

interface ImageProps {
  url: string;
}

const Image = ({ url }: ImageProps) => (
  <Box display="flex" height={"4.75rem"} width="4rem" alignItems={"center"}>
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
const Loading = () => (
  <Box width={1} height={1} display="grid" sx={{ placeItems: "center" }}>
    <CircularProgress color="info" />
  </Box>
);

interface CardQtyProps {
  initialQty: number;
  indexedId: number;
  price: number;
  onDeleteTotal?: () => Promise<void> | void;
  onChangeQty?: () => Promise<void> | void;
}

const CardQty = ({
  initialQty,
  indexedId,
  onDeleteTotal,
  onChangeQty,
  price,
}: CardQtyProps) => {
  const [qty, setQty] = useState(initialQty);
  const { handleOnClick } = useContext(cartContext);

  return (
    <Quantity
      changeQuantity={async () => {
        await cartClient.changeQuantity(indexedId, qty + 1);

        handleOnClick(price, 1, false);

        if (onChangeQty) await onChangeQty();

        setQty((prev) => prev + 1);
      }}
      quantity={qty}
      onDelete={async () => {
        await cartClient.changeQuantity(indexedId, qty - 1);

        handleOnClick(-price, -1, false);

        if (onChangeQty) await onChangeQty();

        if (qty <= 1 && onDeleteTotal) return await onDeleteTotal();

        setQty((prev) => prev - 1);
      }}
    />
  );
};

export default function BodyCart() {
  const {
    dataProducts: {
      data = [],
      isFetching: isLoading,
      refetch: refetchProducts,
    },
    dataPrice: {
      isLoading: isLoadingTotal,
      data: total,
      refetch: refetchPrice,
    },
  } = useGetIndexedDb();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        height={"60vh"}
        sx={{ overflowY: "scroll" }}
      >
        {data?.length > 0 ? (
          <List
            sx={{
              padding: "0",
              width: "100%",
            }}
          >
            {isLoading || isLoadingTotal ? (
              <Loading />
            ) : (
              data?.map(({ imageUrl, name, price, quantity, id }) => (
                <CardStateOrder
                  key={id}
                  img={<Image url={imageUrl} />}
                  title={name}
                  price={price}
                  quantity={
                    <CardQty
                      onChangeQty={() => refetchPrice().then(() => {})}
                      price={price}
                      onDeleteTotal={() =>
                        Promise.all([refetchPrice(), refetchProducts()]).then(
                          () => {},
                        )
                      }
                      initialQty={quantity}
                      indexedId={id!}
                    />
                  }
                />
              ))
            )}
          </List>
        ) : (
          <Typography
            textAlign="center"
            sx={{ paddingTop: "4rem", textTransform: "uppercase" }}
          >
            Tu carrito está vacío.
          </Typography>
        )}
      </Box>
      <LabelStepStatus
        property="Total"
        value={`S/. ${total?.toFixed(2)}`}
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
          fontSize=".9rem"
          padding="1rem 0 .5rem 0"
          color="text.primary"
        >
          Selecciona el tipo de entrega
        </Typography>
        <Box display="flex" gap=".5rem">
          <Button
            onClick={() => {
              setIsPickupStore(true);
              setIsCartShop(false);
            }}
            fullWidth
            label="Recojo en tienda"
            variant="outlined"
            sx={{ height: "2.8rem", fontSize: { xs: ".7rem !important" } }}
          />
          <Button
            fullWidth
            label="Entrega a domicilio"
            variant="contained"
            sx={{ height: "2.8rem", fontSize: { xs: ".7rem !important" } }}
          />
        </Box>
      </Stack>
    </>
  );
}
