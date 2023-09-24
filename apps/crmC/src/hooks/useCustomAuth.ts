import { useAuth0 } from "@auth0/auth0-react"
import { AuthBindings } from "@refinedev/core"
import { graphqlClient } from "../modules"
import { useMemo } from "react"

export const useCustomAuth = () => {
  const { logout, getIdTokenClaims, user, ...rest } = useAuth0()

  const authProvider: AuthBindings = useMemo(()=>( {
    async login() {
      return {
        success: true,
      }
    },
    async logout() {
      await logout({ logoutParams: { returnTo: window.location.origin } })

      return {
        success: true
      }
    },
    async onError(error) {
      return {
        error,
      }
    },

    async check() {
      const token = await getIdTokenClaims()

      if(!token)
        return{
          authenticated: false,
          error: {
              message: "Check failed",
              name: "Token not found",
          },
          redirectTo: "/login",
          logout: true,
        }

      const { __raw } = token

      graphqlClient.setHeader('Authorization', __raw)

      return{
        authenticated: true
      }
        
    },
    getIdentity() {
      return Promise.resolve({
        ...user,
        avatar: user?.picture
      })
    },
  }), [logout, getIdTokenClaims, user])


  return{
    ...rest,
    authProvider,
    logout,
    getIdTokenClaims,
    user
  }

}
