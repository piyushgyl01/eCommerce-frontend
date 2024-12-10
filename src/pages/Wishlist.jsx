import React from 'react';
import Header from "../Components/Header";
import useFetch from "../useFetch";

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

// MUI Icons
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Wishlist() {
    const { data, loading, error } = useFetch("https://e-commerce-backend-two-mu.vercel.app/products");

    // Filter wishlisted items
    const wishlistedItems = Array.isArray(data) ? data.filter(item => item.isWishlisted) : [];

    if (loading) {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
            }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Header />
            <main className="container py-5">
                <Typography variant="h4" component="h1" gutterBottom className="mb-4" align="center">
                    My Wishlist
                </Typography>

                {wishlistedItems.length === 0 ? (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        py: 5
                    }}>
                        <Typography variant="h6">Your wishlist is empty</Typography>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="/products"
                        >
                            Continue Shopping
                        </Button>
                    </Box>
                ) : (
                    <div className="row">
                        {wishlistedItems.map((item) => (
                            <div key={item._id} className="col-md-3 mb-4">
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={item.productImg}
                                            alt={item.productName}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <IconButton
                                            sx={{
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                backgroundColor: 'white',
                                                '&:hover': { backgroundColor: 'white' }
                                            }}
                                        >
                                            <FavoriteIcon color="error" />
                                        </IconButton>
                                    </Box>

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" component="div" align="center">
                                            {item.productName}
                                        </Typography>
                                        <Typography 
                                            variant="h5" 
                                            component="div" 
                                            align="center"
                                            sx={{ fontWeight: 'bold', mt: 1 }}
                                        >
                                            ₹{item.productPrice}
                                        </Typography>
                                        {item.discountPercentage > 0 && (
                                            <Box sx={{ textAlign: 'center', mt: 1 }}>
                                                <Typography
                                                    variant="body2"
                                                    component="span"
                                                    sx={{ textDecoration: 'line-through', color: 'text.secondary', mr: 1 }}
                                                >
                                                    ₹{item.actualPrice}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    component="span"
                                                    sx={{ color: 'success.main' }}
                                                >
                                                    {item.discountPercentage}% off
                                                </Typography>
                                            </Box>
                                        )}
                                    </CardContent>

                                    <CardActions sx={{ p: 2 }}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                backgroundColor: 'grey.500',
                                                '&:hover': { backgroundColor: 'grey.600' }
                                            }}
                                        >
                                            Move to Cart
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}