import * as React from "react";
import Header from "../Components/Header";
import useFetch from "../useFetch";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const MAX = 300;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

export default function Products() {
  const navigate = useNavigate(); // Add this hook
  const [filter, setFilter] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const [val, setVal] = React.useState(MIN);
  const [state, setState] = React.useState({
    men: false,
    women: false,
  });
  const [sortValue, setSortValue] = React.useState("lowToHigh");
  const [ratingValue, setRatingValue] = useState(0)

  // Slider value change handler
  const handleSliderChange = (_, newValue) => {
    setVal(newValue);
  };

  // Checkbox change handler
  const handleCheckboxChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRatingChange = (event) => {
    setRatingValue(event.target.value)
  }

  // Sort by change handler
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const { men, women } = state;
  const errore = [men, women].filter((v) => v).length !== 2;

  // Dynamic URL based on sort value
  // const getProductUrl = () => {
  //   const baseUrl = "https://e-commerce-backend-two-mu.vercel.app";
  //   switch(sortValue) {
  //     case "lowToHigh":
  //       return `${baseUrl}/products/sort/price-asc`;
  //     case "highToLow":
  //       return `${baseUrl}/products/sort/price-desc`;
  //     default:
  //       return `${baseUrl}/products`;
  //   }
  // };

  const getProductUrl = () => {
    const baseUrl = "https://e-commerce-backend-two-mu.vercel.app";

    if (val > MIN) {
      return `${baseUrl}/products/prices/${val}`;
    }

    if (ratingValue) {
      return `${baseUrl}/products/ratings/${ratingValue}`;
    }
  

    if (filter) {
      return `${baseUrl}/products`;
    } else {
      if (men && !women) {
        return `${baseUrl}/products/categories/Men`;
      } else if (women && !men) {
        return `${baseUrl}/products/categories/Women`;
      }
      else if (category) {
        return `${baseUrl}/products/categories/${category}`;
      } else {
        switch (sortValue) {
          case "lowToHigh":
            return `${baseUrl}/products/sort/price-asc`;
          case "highToLow":
            return `${baseUrl}/products/sort/price-desc`;
          default:
            return `${baseUrl}/products`;
        }
      }
    }
  };

  const handleClearFilters = () => {
    setFilter(true);
    setVal(MIN);
    setState({ men: false, women: false });
    setSortValue("lowToHigh");
    setRatingValue(0)
    navigate('/products');
  };


  // const getProductUrl = () => {
  //   const baseUrl = "https://e-commerce-backend-two-mu.vercel.app";
  //   if (men && !women) {
  //     return `${baseUrl}/products/categories/Men`;
  //   } else if (women && !men) {
  //     return `${baseUrl}/products/categories/Women`;
  //   } else {
  //     switch (sortValue) {
  //       case "lowToHigh":
  //         return `${baseUrl}/products/sort/price-asc`;
  //       case "highToLow":
  //         return `${baseUrl}/products/sort/price-desc`;
  //       default:
  //         return `${baseUrl}/products`;
  //     }
  //   }
  // };


  // const getProductUrl = () => {
  //   const baseUrl = "https://e-commerce-backend-two-mu.vercel.app";
  //   if (men && !women) {
  //     return `${baseUrl}/products/categories/Men`;
  //   } else if (women && !men) {
  //     return `${baseUrl}/products/categories/Women`;
  //   } else if (val){
  //     return `${baseUrl}/products/prices/${val}`
  //   }else {
  //     switch (sortValue) {
  //       case "lowToHigh":
  //         return `${baseUrl}/products/sort/price-asc`;
  //       case "highToLow":
  //         return `${baseUrl}/products/sort/price-desc`;
  //       default:
  //         return `${baseUrl}/products`;
  //     }
  //   }
  // };

  
  // Use useFetch with dynamic URL
  const { data, error, loading } = useFetch(getProductUrl());

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh", // Adjust the height as needed
        }}
      >
        <CircularProgress />
      </Box>
    );
  }  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row ">
          <div className="col-md-3 ">
            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <h4>Filters</h4>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                  onClick={handleClearFilters}
                >
                  Clear
                </Typography>
              </Box>
            </div>
            <div>
              <h4>Price</h4>
              <Box sx={{ width: 250 }}>
                <Slider
                  marks={marks}
                  step={10}
                  value={val}
                  valueLabelDisplay="auto"
                  min={MIN}
                  max={MAX}
                  onChange={handleSliderChange}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(MIN)}
                    sx={{ cursor: "pointer" }}
                  >
                    ${MIN}
                  </Typography>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(MAX)}
                    sx={{ cursor: "pointer" }}
                  >
                    ${MAX}
                  </Typography>
                </Box>
              </Box>
            </div>
            <div>
              <Box sx={{ display: "flex" }}>
                <FormControl
                  sx={{ m: 0 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel>
                    <h4>Category</h4>
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={men}
                          onChange={handleCheckboxChange}
                          name="men"
                        />
                      }
                      label="Men"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={women}
                          onChange={handleCheckboxChange}
                          name="women"
                        />
                      }
                      label="Women"
                    />
                  </FormGroup>
                </FormControl>
                <FormControl
                  required
                  error={errore}
                  component="fieldset"
                  sx={{ m: 3 }}
                  variant="standard"
                >
                  {" "}
                </FormControl>
              </Box>
            </div>
            <div>
              <FormControl>
                <FormLabel id="rating-label">
                  <h4>Rating</h4>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="rating-label"
                  value={ratingValue || ""}
                  name="rating"
                  onChange={handleRatingChange}
                >
                  <FormControlLabel
                    value={4}
                    control={<Radio />}
                    label="4 Stars & above"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label="3 Stars & above"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="2 Stars & above"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="1 Stars & above"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="sort-by-label">
                  <h4>Sort by</h4>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="sort-by-label"
                  value={sortValue}
                  name="sort-by"
                  onChange={handleSortChange}
                >
                  <FormControlLabel
                    value="lowToHigh"
                    control={<Radio />}
                    label="Price - Low to High"
                  />
                  <FormControlLabel
                    value="highToLow"
                    control={<Radio />}
                    label="Price - High to Low"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="col-md-9 p-4">
            <h4>Showing All Products</h4>
            <div className="row">
              <p>({data?.length} products)</p>
              {data &&
                data.map((product) => (
                  <div className="col-md-4 my-3" key={product.id}>
                    <Card
                      sx={{ maxWidth: 345, position: "relative", padding: 2 }}
                    >
                      {/* Heart Icon */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                          padding: 0.5,
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <IconButton>
                          <FavoriteBorderIcon sx={{ color: "gray" }} />
                        </IconButton>
                      </Box>

                      {/* Product Image */}
                      <Link
                        to={`/products/${product.productName}/${product._id}`}
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image={product.productImg}
                          alt="https://via.placeholder.com/300"
                        />
                      </Link>
                      {/* Product Content */}
                      <CardContent>
                        <Typography variant="h6" component="div" align="center">
                          {product.productName}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="div"
                          align="center"
                          sx={{ fontWeight: "bold", marginY: 1 }}
                        >
                          ${product.productPrice}
                        </Typography>
                        <Button
                          variant="contained"
                          fullWidth
                          disabled
                          sx={{
                            backgroundColor: "#d3d3d3",
                            color: "black",
                            textTransform: "none",
                            fontWeight: "bold",
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
