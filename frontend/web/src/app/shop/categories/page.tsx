"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
// import { useReadAllCategoriesQuery } from 'core/dist/index';\
import { CardActions, Rating, IconButton } from "@mui/material";
import { useReadAllCategoriesQuery } from 'core/src/2.core/shop/category/3.adapter';
import { IEntity } from "core/src/2.core/shop/category/1.entity";
import { camelCase } from 'string-ts';
import Image from 'next/image';
export default function Page() {
    let photo = '';
    const staticDuration = 750;
    let transitionDelay = -staticDuration;
    const { data: categories = [] as IEntity[], isLoading, isError, error } = useReadAllCategoriesQuery();
    useEffect(() => {

        console.log(categories, isLoading, isError, error);
    }, [categories, isLoading, isError, error]);
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
    return (
        <>
            <Grid container>
                <h1>{camelCase("Product Category")}</h1>
                <Grid container spacing={2}>
                    {categories.length > 0 && categories?.map((category: IEntity, index: number) => {
                        switch (category.name) {
                            case "men's clothing":
                                photo = "/shop/categories/true-blue-suit.jpg";
                                break;
                            case "women's clothing":
                                photo = "/shop/categories/O1CN01LjGxkl2BFZgHwGYXv__2208897598309-0-cib.webp";
                                break;
                            case "jewelery":
                                photo = "/shop/categories/Jewellery-gifts-for-her.jpg";
                                break;
                            case "electronics":
                                photo = "/shop/categories/modern-stationary-collection-arrangement_23-2149309648.avif";
                                break;
                            default:
                                break;
                        }
                        return (
                            <>
                                {category.name && <Grid key={index} item lg={3} md={4} sm={6} xs={12} style={{ display: 'flex', gridAutoRows: '1fr' }}>
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
                                                title={category.name}
                                                sx={{ height: '200px', padding: "1em 1em 0 1em", position: 'relative' }}
                                            >
                                                {photo && <div style={{ position: 'relative', textAlign: "center", width: '100%', height: '100%' }}>
                                                    <Image src={photo} height="200" width="200" style={{ objectFit: "contain" }} alt={category.name} />
                                                </div>}
                                            </CardMedia>
                                            <CardContent>
                                                <Link href={`/shop/categories/${category.name}`}
                                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                                >
                                                    <Typography

                                                        style={{ textTransform: 'capitalize', lineHeight: '1.5em', height: '4.5em', overflow: 'hidden' }}
                                                        gutterBottom align='center' variant="body1" component="div">
                                                        {category.name}
                                                    </Typography>
                                                </Link>
                                            </CardContent>

                                            <CardActions style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignSelf: "end"
                                            }}>
                                            </CardActions>
                                            <CardActions style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignSelf: "end"
                                            }}>

                                            </CardActions>
                                        </Card>
                                    </Zoom>
                                </Grid >
                                }
                            </>);
                    })
                    }

                </Grid >
            </Grid >
        </>
    );
};