// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import Button from "@mui/material/Button";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import MoreIcon from "@mui/icons-material/MoreVert";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   maxWidth: 600, // Added max width to prevent stretching too wide
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: "auto",
//     marginRight: "auto", // Center the search bar
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       {/* Mobile menu items remain the same */}
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: "#5B3EEF" }}>
//         <div className="-2 container">
//           <Toolbar sx={{ display: "flex", alignItems: "center" }}>
//             <Box
//               component="img"
//               src="https://genshinfans.com/cdn/shop/files/logogenshin_shop.png?v=1693905358&width=300"
//               alt="Logo"
//               sx={{
//                 height: 20,
//                 display: { xs: "none", sm: "block" },
//                 mr: 2,
//               }}
//             />

//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>

//             <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
//               <Button
//                 sx={{
//                   backgroundColor: "white",
//                   color: "#5B3EEF",
//                   "&:hover": { backgroundColor: "lightgray" },
//                   mr: 2, // Add margin to the right of the login button
//                 }}
//                 variant="contained"
//               >
//                 Login
//               </Button>

//               <Box sx={{ display: { xs: "none", md: "flex" } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="show favorites"
//                   color="inherit"
//                 >
//                   <Badge badgeContent={4} color="error">
//                     <FavoriteIcon />
//                   </Badge>
//                 </IconButton>
//                 <IconButton
//                   size="large"
//                   aria-label="show shopping cart"
//                   color="inherit"
//                 >
//                   <Badge badgeContent={17} color="error">
//                     <ShoppingCartIcon />
//                   </Badge>
//                 </IconButton>
//                 <IconButton
//                   size="large"
//                   edge="end"
//                   aria-label="account of current user"
//                   aria-controls={menuId}
//                   aria-haspopup="true"
//                   onClick=""
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//               </Box>
//             </Box>

//             <Box sx={{ display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="show more"
//                 aria-controls={mobileMenuId}
//                 aria-haspopup="true"
//                 onClick={handleMobileMenuOpen}
//                 color="inherit"
//               >
//                 <MoreIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </div>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  TextField, 
  Box, 
  Container 
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Search as SearchIcon, 
  ShoppingCart as CartIcon, 
  Favorite as FavoriteIcon, 
  AccountCircle as ProfileIcon 
} from '@mui/icons-material';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#5B3EEF" }} color="default">
        <Container  maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}
            className='container'
          >
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="https://genshinfans.com/cdn/shop/files/logogenshin_shop.png?v=1693905358&width=300" 
                alt="Brand Logo" 
                style={{ 
                  height: '18px', 
                  display: { xs: 'block', md: 'block' } 
                }} 
              />
            </Box>

            {/* Search Bar (Desktop) */}
            {/* <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' }, 
                justifyContent: 'center',
                mx: 2 ,
              }}
            >
              <TextField 
                variant="outlined" 
                placeholder="Search..." 
                size="small" 
                sx={{ width: '400px', }} 
              />
            </Box> */}

<Box 
  sx={{ 
    flexGrow: 1, 
    display: { xs: 'none', md: 'flex' }, 
    justifyContent: 'center',
    mx: 2 
  }}
>
  <TextField
    variant="outlined"
    placeholder="Search..."
    size="small"
    sx={{
      width: '400px',
      backgroundColor: 'white',
      '& .MuiOutlinedInput-root': {
        borderRadius: '0px', // Make it round
        '& fieldset': {
          borderRadius: '0px', // Also ensure the fieldset is round
        },
      },
    }}
    InputProps={{
      startAdornment: (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
          <SearchIcon sx={{ color: 'black' }} />
        </Box>
      ),
    }}
  />
</Box>

            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
               <Button
              sx={{
                   backgroundColor: "white",
                 color: "#5B3EEF",
                  "&:hover": { backgroundColor: "lightgray" },
                   mr: 1, // Add margin to the right of the login button
                 }}
                 variant="contained"
              >
              Login
             </Button>
             </Box>
            {/* Mobile Search Icon */}
            <Box 
              sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                alignItems: 'center' 
              }}
            >
              <IconButton onClick={toggleSearch}>
                <SearchIcon sx={{ color: 'white' }}  />
              </IconButton>
            </Box>

            {/* Right Icons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <IconButton>
    <CartIcon sx={{ color: 'white' }} />
  </IconButton>
  <IconButton>
    <FavoriteIcon sx={{ color: 'white' }} />
  </IconButton>
  <IconButton>
    <ProfileIcon sx={{ color: 'white' }} />
  </IconButton>
            </Box>

            {/* Mobile Menu Toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Search Drawer */}
      {isSearchOpen && (
        <Box 
          sx={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            zIndex: 1300, 
            bgcolor: 'white', 
            p: 2 
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField 
              fullWidth 
              variant="outlined" 
              placeholder="Search..." 
              size="small" 
              sx={{ mr: 1 }}
            />
            <IconButton onClick={toggleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* Mobile Side Drawer */}
      <Drawer 
        anchor="right" 
        open={isDrawerOpen} 
        onClose={toggleDrawer}
      >
        <Box 
          sx={{ width: 250 }} 
          role="presentation" 
          onClick={toggleDrawer}
        >
          <List>
            <ListItem>
              <IconButton>
                <ProfileIcon /> Profile
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <FavoriteIcon /> Favorites
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <CartIcon /> Cart
              </IconButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
        