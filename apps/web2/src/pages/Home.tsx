import { Link } from 'react-router-dom';
import {
  CardHero,
  ColorSwitch,
  MainLogo,
  NavBar,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
} from '../../../../packages/ui/src';
import { GeneralLayout } from '../layout/GeneralLayout';
import ResponsiveCarousel from '../components/ResponsiveCarousel';
import { SxProps, Stack, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ProductsList from '../components/ProductList';
import NavLinks from '../components/NavLinks';
import { useGames } from '../hooks/useGames';
import { sxInnerStack } from './styles';
import { useToggleColor } from '../providers/theme';
import { useContext, useMemo } from 'react';
import CartIconReactive from '../components/CartIconReactive';
import { cartContext } from '../context/cartContext';
import { IOffer } from '../types/games';
import { cartClient } from '../modules';
import { Menu as MenuIcon } from '@mui/icons-material';
import { setAnchorElMenu, useAnchorElMenu } from '../observables';
import CustomSearchBar from '../components/CustomSearchBar';

const CardHeroHOC = ({
  image_url = '',
  description = '',
  product_id = '',
  name = '',
  price = 0,
}: IOffer) => {
  const { handleOnClick } = useContext(cartContext);

  const _handleClick = () => {
    cartClient.addProduct({
      imageUrl: image_url,
      name,
      price,
      priceDiscount: 0,
      productId: product_id,
      quantity: 1,
    });

    handleOnClick(price);
  };

  return (
    <CardHero
      onClick={_handleClick}
      alt=''
      description={description}
      image={image_url}
      key={image_url ?? ''}
    />
  );
};

const render = (props: IOffer) => (
  <CardHeroHOC key={props.product_id} {...props} />
);

export default function Home() {
  const { data } = useGames();
  const toggleColor = useToggleColor();
  const theme = useTheme();
  const anchorEl = useAnchorElMenu();

  const noMargin: SxProps = useMemo(
    () => ({
      margin: '0 !important',
      filter: theme.palette.mode == 'dark' ? 'invert(1)' : 'invert(0)',
    }),
    [theme.palette.mode],
  );

  const _handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(anchorEl ? null : event.currentTarget);
  }

  return (
    <GeneralLayout
      navBar={
        <NavBar
          actionsComponent={
            <ColorSwitch onChange={toggleColor} overrideCheckBg />
          }
          cartComponent={<CartIconReactive />}
          navigatorLinks={<NavLinks />}
          mainLogo={
            <Link to='/'>
              <MainLogo sx={{ width: { xs: '70%' } }} />
            </Link>
          }
          searchBar={
            <CustomSearchBar placeHolder='Ingresa tu búsqueda' />
          }
          menu={
            <IconButton onClick={_handleOpenMenu} size="small">
              <MenuIcon />
            </IconButton>
          }
        />
      }
    >
      <ResponsiveCarousel data={data ?? []} itemRender={render} />
      <Stack
        direction='row'
        gap={{ sm: 6 }}
        justifyContent={{ xs: 'space-evenly', sm: 'center' }}
        sx={sxInnerStack}
      >
        <PlayStation4Logo sx={noMargin} />
        <PlayStation5Logo sx={noMargin} />
        <NintendoLogo sx={noMargin} />
        <XboxLogo sx={noMargin} />{' '}
      </Stack>
      <ProductsList />
    </GeneralLayout>
  );
}
