"use client";
// ------------------------------------------------------------------- IMPORT/REACT
import React, { useEffect } from "react";
// ------------------------------------------------------------------- IMPORT/REDUX
// ------------------------------------------------------------------- IMPORT/NEXT
import Link from "next/link";
import Image from 'next/image';
// ------------------------------------------------------------------- IMPORT/STRING-TS
import { camelCase } from 'string-ts';
// ------------------------------------------------------------------- IMPORT/MATERIAL
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// ------------------------------------------------------------------- IMPORT/ICONS-MATERIAL
// ------------------------------------------------------------------- IMPORT/CORE
import { IEntity as ICategoryEntity, useReadAllCategoriesQuery } from 'core/src/2.core/shop/category';
// ------------------------------------------------------------------- PAGE
export default function Page() {
    let photo = '';
    const staticDuration = 750;
    let transitionDelay = -staticDuration;
    const { data: categories = [] as ICategoryEntity[], isLoading, isError, error } = useReadAllCategoriesQuery();
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
                    {categories.length > 0 && categories?.map((category: ICategoryEntity, index: number) => {
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
                                            <Link href={`/shop/categories/${category.name}`}
                                                style={{ textDecoration: 'none', color: 'inherit' }}
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

                                                    <Typography

                                                        style={{ textTransform: 'capitalize', lineHeight: '1.5em', height: '4.5em', overflow: 'hidden' }}
                                                        gutterBottom align='center' variant="body1" component="div">
                                                        {category.name}
                                                    </Typography>

                                                </CardContent>
                                            </Link>
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