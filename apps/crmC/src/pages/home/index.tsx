import { useAuth0 } from "@auth0/auth0-react"
import { Box, Button, Container, Typography } from "@mui/material"
import { MainLogo } from "../../../../../packages/ui/src"

export const Home = ()=>{
  const { loginWithRedirect } = useAuth0()

  return <Container>
    <Box display={'grid'} minHeight={'100vh'} sx={{placeItems: 'center'}} >
      <Box display={'flex'} gap={4}>
        <MainLogo />
        <Box display={'grid'} gap={4}>
          <Typography variant="h1">
            Sistema de gestion de <br/>inventario y pedidos
          </Typography>
          <Button variant="contained" onClick={()=> loginWithRedirect()}>
            Login
          </Button>  
        </Box>
      </Box>
    </Box>
  </Container>
}
