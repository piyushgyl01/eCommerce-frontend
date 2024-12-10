import React, { useState } from 'react';
import Header from "../Components/Header";
import useFetch from "../useFetch";

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

// MUI Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Cart() {
    const { data: cartItems, loading, error } = useFetch("https://e-commerce-backend-two-mu.vercel.app/products/inCart");

    const calculatePriceDetails = () => {
        if (!cartItems || !Array.isArray(cartItems)) {
            return { subtotal: 0, discount: 0, delivery: 0, total: 0 };
        }

        const subtotal = cartItems.reduce((sum, item) => sum + (item.productPrice * (item.quantity || 1)), 0);
        const discount = subtotal * 0.5; // 50% discount
        const delivery = subtotal > 0 ? 499 : 0;
        const total = subtotal - discount + delivery;

        return { subtotal, discount, delivery, total };
    };

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

    const { subtotal, discount, delivery, total } = calculatePriceDetails();

    return (
        <>
            <Header />
            <main className="container py-5">
                <Typography variant="h4" component="h1" gutterBottom className="mb-4">
                    MY CART ({Array.isArray(cartItems) ? cartItems.length : 0})
                </Typography>

                <div className="row">
                    {/* Cart Items */}
                    <div className="col-md-8 mb-4">
                        {Array.isArray(cartItems) && cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <Paper key={item._id} className="mb-4 p-4">
                                    <div className="row">
                                        {/* Product Image */}
                                        <div className="col-md-4 mb-3 mb-md-0">
                                            <img
                                                src={item.productImg}
                                                alt={item.productName}
                                                className="img-fluid rounded"
                                                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="col-md-8">
                                            <Typography variant="h6" gutterBottom>
                                                {item.productName}
                                            </Typography>

                                            <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                                                <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
                                                    ₹{item.productPrice}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    sx={{ textDecoration: 'line-through', color: 'text.secondary', ml: 2 }}
                                                >
                                                    ₹{item.productPrice * 2}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    sx={{ color: 'success.main', ml: 2 }}
                                                >
                                                    50% off
                                                </Typography>
                                            </Box>

                                            {/* Quantity Controls */}
                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    Quantity:
                                                </Typography>
                                                <ButtonGroup size="small" sx={{ backgroundColor: 'background.paper' }}>
                                                    <Button>
                                                        <RemoveIcon />
                                                    </Button>
                                                    <Button disabled>
                                                        {item.quantity || 1}
                                                    </Button>
                                                    <Button>
                                                        <AddIcon />
                                                    </Button>
                                                </ButtonGroup>
                                            </Box>

                                            {/* Action Buttons */}
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                >
                                                    Remove From Cart
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                >
                                                    Move to Wishlist
                                                </Button>
                                            </Box>
                                        </div>
                                    </div>
                                </Paper>
                            ))
                        ) : (
                            <Paper className="p-5 text-center">
                                <Typography variant="h6">Your cart is empty</Typography>
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    href="/products"
                                >
                                    Continue Shopping
                                </Button>
                            </Paper>
                        )}
                    </div>

                    {/* Price Details */}
                    <div className="col-md-4">
                        <Paper className="p-4" sx={{ position: { md: 'sticky' }, top: { md: '20px' } }}>
                            <Typography variant="h6" gutterBottom>
                                PRICE DETAILS
                            </Typography>
                            <Divider sx={{ mb: 2 }} />

                            <Box sx={{ mb: 2 }}>
                                <div className="d-flex justify-content-between mb-2">
                                    <Typography>
                                        Price ({Array.isArray(cartItems) ? cartItems.length : 0} items)
                                    </Typography>
                                    <Typography>₹{subtotal}</Typography>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <Typography>Discount</Typography>
                                    <Typography color="success.main">- ₹{discount}</Typography>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <Typography>Delivery Charges</Typography>
                                    <Typography>₹{delivery}</Typography>
                                </div>
                            </Box>

                            <Divider sx={{ my: 2 }} />
                            
                            <div className="d-flex justify-content-between mb-3">
                                <Typography variant="h6">TOTAL AMOUNT</Typography>
                                <Typography variant="h6">₹{total}</Typography>
                            </div>

                            {discount > 0 && (
                                <Typography color="success.main" gutterBottom>
                                    You will save ₹{discount} on this order
                                </Typography>
                            )}

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{ mt: 2 }}
                                disabled={!Array.isArray(cartItems) || cartItems.length === 0}
                            >
                                PLACE ORDER
                            </Button>
                        </Paper>
                    </div>
                </div>
            </main>
        </>
    );
}