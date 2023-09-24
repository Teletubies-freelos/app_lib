import { Authenticated as AuthenticatedRefine } from "@refinedev/core"

import { AuthenticatedProps as  AuthenticatedPropsRefine } from "@refinedev/core/src/components/authenticated"
import { env } from "../../config/env"


export const Authenticated = ({children, ...rest}: AuthenticatedPropsRefine)=>{
  if(env.IS_AUTH_DISABLED){
    if(!env.IS_MSW_ON)
      console.log(
        `Be careful, MSW is not ON and maybe the backend you are querying is
        going to fail due to auth permission`
      )

    return <>{children}</>
  }
  
  return(
    <AuthenticatedRefine {...rest}>
      {children}
    </AuthenticatedRefine>
  )
}
