import { Auth0Provider } from "@auth0/auth0-react"
import { env } from "../../config/env"
import { PropsWithChildren } from "react"

export const AuthContextProvider = ({ children }: PropsWithChildren) =>{
  return (
    <Auth0Provider 
      clientId={env.OAUTH_ID}
      domain={env.OAUTH_DOMAIN}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      {children}
    </Auth0Provider>
  )
}
