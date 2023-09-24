import { CatchAllNavigate } from "@refinedev/react-router-v6"
import { Authenticated } from "../../components/authenticated"

export const DashBoard = ()=>{
  return (
    <Authenticated  fallback={<CatchAllNavigate to="/home"/>}>
        <div>Private page</div>
    </Authenticated>
  )
}
