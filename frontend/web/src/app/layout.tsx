'use client';
import { Inter } from "next/font/google";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { ApiController } from "core/dist/adapters/controller";
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Container, Drawer, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from 'react-redux';
// import { store } from "core/dist";
import { persistor, store } from "core/src";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Favorite from '@mui/icons-material/Favorite';
import TagIcon from '@mui/icons-material/Tag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { PersistGate } from 'redux-persist/integration/react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [value, setValue] = useState(0);
  const isWebeSize = useMediaQuery('(min-width:800px)');
  return (
    <html lang="en">
      <body style={{ minHeight: '100%' }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

            {/* {!isWebeSize && (
            <>
              {children}
              <BottomNavigation
                sx={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100px',
                  zIndex: 1 // Setting zIndex
                }}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <Link href="/shop/products">
                  <BottomNavigationAction sx={{}} label="Products" icon={<StorefrontIcon />} />
                </Link>
                <Link href="/shop/categories">
                  <BottomNavigationAction sx={{}} label="Categories" title="saam" icon={<TagIcon />} />
                </Link>
                <Link href="/shop/favorites">
                  <BottomNavigationAction sx={{}} label="Favorites" icon={<Favorite />} />
                </Link>
                <Link href="/shop/cart">
                  <BottomNavigationAction sx={{}} label="Cart" icon={<ShoppingCartIcon />} />
                </Link>
              </BottomNavigation>
            </>
          )} */}

            {isWebeSize &&
              (
                <>
                  <Box sx={{ flexGrow: 1, marginBottom: '8px' }}>
                    <AppBar color="transparent" position="static">
                      <Toolbar>
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                        >
                          {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          © CodeWithMohsen
                        </Typography>
                        <Button color="inherit" href="/shop/products">Products</Button>
                        <Button color="inherit" href="/shop/categories">Categories</Button>
                        <Button color="inherit" href="/shop/favorites">Favorites</Button>
                        <Button color="inherit" href="/shop/cart">Cart</Button>
                      </Toolbar>
                    </AppBar>
                  </Box>
                  <>
                    {children}
                  </>
                </>
              )}

          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
