import { Authenticated } from "../../components/authenticated";
import { ListProducts } from "./list";

export default function ProductsListPage(){
  return(
    <Authenticated>
      <ListProducts />
    </Authenticated>
  )
}
