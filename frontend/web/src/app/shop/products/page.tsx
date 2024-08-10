"use client";
import React, { useEffect } from "react";
import { Box, CircularProgress, Grid, Zoom, Card, CardMedia, CardContent, Typography, CardActions, Rating, IconButton, ListItem } from "@mui/material";
import { Input } from '@mui/material';
import Link from "next/link";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { IEntity as IProductEntity } from "core/src/2.core/shop/product/1.entity";
import { IEntity as IFavoriteEntity } from "core/src/2.core/shop/favorite/1.entity";
import { IEntity as ICartEntity } from "core/src/2.core/shop/cart/1.entity";
import { useReadAllProductsQuery } from "core/src/2.core/shop/product/3.adapter";
import Image from 'next/image';
import { RootState } from "core/src";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "core/src/2.core/shop/favorite/3.adapter";
import { resetItem, decreaseItem, increaseItem } from "core/src/2.core/shop/cart/3.adapter";
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { camelCase } from 'string-ts';
export default function Page() {
    const staticDuration = 750;
    let transitionDelay = -staticDuration;
    const { data: products = [], isLoading, isError, error } = useReadAllProductsQuery();
    const favoriteState: IFavoriteEntity = useSelector((state: RootState) => state['/shop/favorite']);
    const cartState: ICartEntity = useSelector((state: RootState) => state['/shop/cart']);
    const dispatch = useDispatch();
    let isExist: boolean = false;

    const isProductInCart = (productId: number) => {
        return cartState.items && cartState.items.length > 0 && cartState.items.some(item => item.id === productId);
    };

    const counterHandler = (e: React.FormEvent<HTMLInputElement>, id: any) => {

        console.log('counterHandler', e.currentTarget.value, id);

        const item = cartState && cartState.items?.find(item => item.id === id);
        if (item) {
            if (+e.currentTarget.value > item.among)
                dispatch(increaseItem(item.id));
            if (+e.currentTarget.value < item.among)
                dispatch(decreaseItem(item.id));
        }
    };
    if (isLoading)
        return (
            <Box sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress sx={{ width: '10em' }} />
            </Box>
        );
    if (isError) return (
        <Grid container>
            <Typography>Error:</Typography>
            <Grid container>
                <Typography>{error.message}</Typography>
            </Grid>
        </Grid>);
    if (products) return (
        <>
            <Grid container>
                <h1>{camelCase("Products")}</h1>
                <Grid container spacing={2}>
                    {products && products.length > 0 && products?.map((product: IProductEntity, index: number) => {
                        return (

                            <Grid key={index} item lg={3} md={4} sm={6} xs={12} style={{ display: 'flex', gridAutoRows: '1fr' }}>
                                <Zoom in={true} style={{
                                    transitionDelay: (transitionDelay += staticDuration) + 'ms',
                                    transitionDuration: '1000ms'
                                }}>
                                    <Card raised
                                        sx={{
                                            width: '100%',
                                            margin: "0 auto",
                                            padding: "1em",
                                        }}
                                    >
                                        <CardMedia
                                            title={product.title ? product?.title : ''}
                                            sx={{ height: '200px', padding: "1em 1em 0 1em", position: 'relative' }}
                                        >
                                            {product.image && product.title && <div style={{ position: 'relative', textAlign: "center", width: '100%', height: '100%' }}>
                                                <Image src={product.image} height="200" width="200" style={{ objectFit: "contain" }} alt={product.title} />
                                            </div>}
                                        </CardMedia>
                                        <CardContent>
                                            <Link href={`/shop/products/${product.id}`}
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                            >
                                                <Typography
                                                    style={{ lineHeight: '1.5em', height: '4.5em', overflow: 'hidden' }}
                                                    gutterBottom align='center' variant="body1" component="div">
                                                    {product.title}
                                                </Typography>
                                            </Link>
                                        </CardContent>

                                        <CardActions style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignSelf: "end"
                                        }}>
                                            <Rating name="half-rating-read" defaultValue={product?.rating?.rate} precision={0.5} readOnly />
                                            <Typography variant="body1" color="text.secondary">
                                                {product?.rating?.rate} /  {product?.rating?.count} <PeopleAltIcon style={{ verticalAlign: 'top' }} />
                                            </Typography>
                                        </CardActions>
                                        <CardActions style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignSelf: "end"
                                        }}>
                                            <IconButton size="small" onClick={e => product.id && dispatch(toggleFavorite(product.id))}>
                                                {
                                                    favoriteState && product && product.id && favoriteState.ids?.includes(product.id)
                                                        ?
                                                        <FavoriteIcon />
                                                        :
                                                        < FavoriteBorderIcon />
                                                }</IconButton>
                                            <Typography variant="body1" color="text.secondary">
                                                {product.price} $
                                            </Typography>
                                            {
                                                isProductInCart(product.id as number) ?
                                                    <>
                                                        <Input type="number" value={cartState.items?.find(item => item.id === product.id)?.among} size="small" sx={{ maxWidth: "48px" }} onChange={e => counterHandler(e, product.id)}></Input>
                                                        <IconButton size="small" onClick={e => product.id && dispatch(resetItem(product.id))}>
                                                            < RemoveShoppingCartOutlinedIcon />
                                                        </IconButton>
                                                    </> : <IconButton size="small" onClick={e => product.id && dispatch(increaseItem(product.id))}>
                                                        <AddShoppingCartIcon />
                                                    </IconButton>
                                            }

                                        </CardActions>
                                    </Card>
                                </Zoom>
                            </Grid >
                        );
                    })
                    }
                </Grid >
            </Grid >
        </>
    );
}
