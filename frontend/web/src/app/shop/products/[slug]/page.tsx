"use client";

import { useEffect } from "react";
import { useReadProductQuery } from "core/src/2.core/shop/product/3.adapter";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Zoom, Typography, Rating, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Image from 'next/image';
import { IEntity as IFavoriteEntity } from "core/src/2.core/shop/favorite/1.entity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "core/src";
import { toggleFavorite } from "core/src/2.core/shop/favorite/3.adapter";
export default function Page({ params }: { params: { slug: string; }; }) {
    let transitionDelay = 0;
    const { data: product = undefined, isLoading, isError, error } = useReadProductQuery(+params.slug);
    const favoriteState: IFavoriteEntity = useSelector((state: RootState) => state['/shop/favorite']);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(favoriteState);
    }, [favoriteState]);
    useEffect(() => {
        console.log(product);
    }, [product, isLoading, isError, error]);
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
            <h1>Error:</h1>
            <Grid container>
                <p>{error.message}</p>
            </Grid>
        </Grid>);
    if (product) return (
        <>
            <Zoom in={true} style={{
                // transitionDelay: '00ms',
                transitionDuration: '2000ms'
            }}>
                <Grid container spacing={2}>

                    <Grid item lg={3} md={4} sm={12} xs={12}
                    >
                        <>
                            {
                                product.image &&
                                <Image
                                    src={product.image}
                                    alt="Picture of the author"
                                    width={2250}
                                    height={1390}
                                    layout="responsive"
                                />
                            }
                        </>
                        <Grid style={{
                            width: '90%',
                            padding: '5%'
                        }}>
                            <IconButton size="small"><AddShoppingCartIcon /></IconButton>
                            <IconButton size="small" onClick={e => product.id && dispatch(toggleFavorite(product.id))}>
                                {
                                    favoriteState && product && product.id && favoriteState.ids?.includes(product.id)
                                        ?
                                        <FavoriteIcon />
                                        :
                                        < FavoriteBorderIcon />

                                }</IconButton>
                        </Grid>
                    </Grid>
                    <Grid item lg={9} md={8} sm={12} xs={12}
                        style={{
                            width: '90%',
                            padding: '5%'
                        }}>
                        <Typography
                            style={{ lineHeight: '1.5em', height: '4.5em', overflow: 'hidden' }}
                            gutterBottom align='left' variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={product.rating?.rate} precision={0.5} readOnly />
                        <Typography variant="body1" color="text.secondary">
                            {product.rating?.rate} /  {product.rating?.count} <PeopleAltIcon style={{ verticalAlign: 'top' }} />
                        </Typography>

                        <Typography variant="body1" color="text.secondary">
                            {product.price} $
                        </Typography>
                        <Typography
                            style={{ lineHeight: '1.5em', height: '4.5em', overflow: 'hidden' }}
                            gutterBottom align='justify' variant="body1" component="div">
                            {product.description}
                        </Typography>
                    </Grid>

                </Grid>
            </Zoom>
        </>
    );
}