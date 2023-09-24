import { QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { queryClient } from "../../modules/query"
import { ThemeProvider }  from '../../../../web2/src/providers/theme'
import { DataProvider } from "../../context/data"
import { ordersClient, productsClient } from "../../modules"

export const Providers = ({children}: PropsWithChildren)=>{
  return(
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <DataProvider 
          products={productsClient} 
          orders={ordersClient}
        >
          {children}
        </DataProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
