import React, { useState } from 'react';
import Header from "../Components/Header";
import { useNavigate } from 'react-router-dom';

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

// MUI Icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

export default function Checkout() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'Sri Lanka',
        streetAddress: '',
        townCity: '',
        province: '',
        zipCode: '',
        phone: '',
        email: '',
        additionalInfo: '',
        paymentMethod: 'directBankTransfer'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <>
            <Header />
            <Box className="container py-5">
                {/* Breadcrumb */}
                <Box sx={{ mb: 4 }}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                        <Link 
                            href="/"
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                color: 'text.primary',
                                textDecoration: 'none'
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography color="text.primary">Checkout</Typography>
                    </Breadcrumbs>
                </Box>

                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Checkout
                </Typography>

                <div className="row mt-5">
                    {/* Billing Details Form */}
                    <div className="col-md-8">
                        <Paper className="p-4">
                            <Typography variant="h5" gutterBottom>
                                Billing details
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Company Name (Optional)"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <FormControl fullWidth>
                                            <InputLabel>Country / Region</InputLabel>
                                            <Select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                label="Country / Region"
                                                required
                                            >
                                                <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Street Address"
                                            name="streetAddress"
                                            value={formData.streetAddress}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Town / City"
                                            name="townCity"
                                            value={formData.townCity}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <FormControl fullWidth>
                                            <InputLabel>Province</InputLabel>
                                            <Select
                                                name="province"
                                                value={formData.province}
                                                onChange={handleInputChange}
                                                label="Province"
                                                required
                                            >
                                                <MenuItem value="Western Province">Western Province</MenuItem>
                                                <MenuItem value="Central Province">Central Province</MenuItem>
                                                <MenuItem value="Southern Province">Southern Province</MenuItem>
                                                {/* Add other provinces */}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="ZIP Code"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Additional Information"
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                            multiline
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            </form>
                        </Paper>
                    </div>

                    {/* Order Summary */}
                    <div className="col-md-4">
                        <Paper className="p-4">
                            <Typography variant="h5" gutterBottom>
                                Your Order
                            </Typography>
                            <Box sx={{ my: 3 }}>
                                <div className="d-flex justify-content-between mb-2">
                                    <Typography variant="subtitle1">Product</Typography>
                                    <Typography variant="subtitle1">Subtotal</Typography>
                                </div>
                                <Divider />
                                <div className="d-flex justify-content-between my-2">
                                    <Typography color="text.secondary">Asgaard sofa × 1</Typography>
                                    <Typography>Rs. 250,000.00</Typography>
                                </div>
                                <Divider />
                                <div className="d-flex justify-content-between my-2">
                                    <Typography>Subtotal</Typography>
                                    <Typography>Rs. 250,000.00</Typography>
                                </div>
                                <Divider />
                                <div className="d-flex justify-content-between my-2">
                                    <Typography variant="h6">Total</Typography>
                                    <Typography variant="h6" color="primary">Rs. 250,000.00</Typography>
                                </div>
                            </Box>

                            {/* Payment Methods */}
                            <FormControl component="fieldset">
                                <RadioGroup
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel 
                                        value="directBankTransfer" 
                                        control={<Radio />} 
                                        label="Direct Bank Transfer"
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mb: 2 }}>
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </Typography>
                                    
                                    <FormControlLabel 
                                        value="cashOnDelivery" 
                                        control={<Radio />} 
                                        label="Cash On Delivery"
                                    />
                                </RadioGroup>
                            </FormControl>

                            <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                                <Link href="/privacy-policy" color="primary">
                                    privacy policy
                                </Link>
                                .
                            </Typography>

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                onClick={handleSubmit}
                                sx={{ mt: 2 }}
                            >
                                Place order
                            </Button>
                        </Paper>
                    </div>
                </div>
            </Box>
        </>
    );
}