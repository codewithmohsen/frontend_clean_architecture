'use client';
import { useEffect } from 'react';
import {
	Box,
	CircularProgress,
	Grid,
	Zoom,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Rating,
	IconButton,
} from '@mui/material';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { IEntity } from 'core/dist/entities/shop/product';
import { useReadCategoryQuery } from 'core/dist';
// import { Description } from '@mui/icons-material';
export default function Page({ params }: { params: { slug: string; }; }) {
	const staticDuration = 750;
	let transitionDelay = -staticDuration;
	const products = [{
		id: 1,
		title: "Dopamine",
		summery: "The pathway to pleasure",
		description: "Dopamine can provide an intense feeling of reward.",
		image: "http://content.health.harvard.edu/wp-content/uploads/2024/04/f79b7ea3-2c3c-4fb1-948d-52c8c2f2f020.jpg"
	},
	{
		id: 2,
		title: "Serotonin",
		summery: "The natural mood booster",
		description: "When you feel happy and all seems right with the world, you're feeling the effects of serotonin. This hormone is responsible for boosting mood, as well as a host of other functions.",
		image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11301/3a3a561a-3718-4de0-ac7e-e58d3da160e0.jpg"
	}
		,
	{
		id: 3,
		title: "Endorphins",
		summery: "The brain's natural pain reliever",
		description: "Endorphins can also release stress and create a feeling of well-being.",
		image: "http://content.health.harvard.edu/wp-content/uploads/2024/04/da91c4c9-8c7e-46b5-ae79-72d7130e0f4c.jpg"
	}
		, {
		id: 4,
		title: "Oxytocin",
		summery: "The love hormone",
		description: "Oxytocin can help us bond with loved ones and can be released through touch, music, and exercise.",
		image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11300/f34f7795-54d5-494c-aa90-54e8ea64f88c.jpg"
	}];

	if (products)
		return (
			<>
				{/* <h1>Boost levels of these hormones with some simple lifestyle changes</h1> */}
				<Grid

					container
					padding={2}
					spacing={2}
				>

					{products.length > 0 &&
						products?.map((product: any, index: number) => {
							return (
								<>

									<Grid
										key={index}
										item
										lg={3}
										md={4}
										sm={6}
										xs={12}
										style={{ display: 'flex', gridAutoRows: '1fr' }}>
										<Zoom
											in={true}
											style={{

												transitionDelay: (transitionDelay += staticDuration) + 'ms',
												transitionDuration: '1000ms',
											}}>
											<Card raised
												sx={{
													borderRadius: "50%", border: '1px solid none',
													width: '100%',
													margin: "0 auto",

												}}
											>
												<CardMedia
													image={product?.image ? product.image : ''}
													title={product?.title ? product?.title : ''}
													sx={{ borderRadius: "10", height: '200px' }}
												/>
												<CardContent>
													<Link href={`/products/${product.id}`}
														style={{ textDecoration: 'none', color: 'inherit' }}
													>
														<Typography
															style={{ lineHeight: '1.5em', overflow: 'hidden' }}
															gutterBottom align='center' variant="body1" component="div">
															{product.title}
														</Typography>
													</Link>
												</CardContent>
											</Card>

										</Zoom>
									</Grid >
								</>
							);
						})}
				</Grid >
			</>
		);
}
