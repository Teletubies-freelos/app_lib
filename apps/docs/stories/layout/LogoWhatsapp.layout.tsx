import { Box, CartIcon, NavBar, Stack } from "../../../../packages/ui/src";
import WhatsappLogo from '../../../../packages/ui/src/atoms/WhatsappLogo';
  
  export default function LogoWhatsapp() {
    return (
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        sx={{ height: "40rem" }}
      >
        <NavBar cartComponent={<CartIcon />} onSearch={console.log} />
        <Box display='flex' justifyContent='end' sx={{width:'100%'}}>
            <WhatsappLogo />
        </Box>
      </Stack>
    );
  }
  