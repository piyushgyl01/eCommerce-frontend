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
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

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
  const [val, setVal] = React.useState(MIN);
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
  });
  const [sortValue, setSortValue] = React.useState("lowToHigh"); // State for sort by

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

  // Sort by change handler
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const { gilad, jason } = state;
  const errore = [gilad, jason].filter((v) => v).length !== 2;

  const { data, error, loading } = useFetch(
    "https://e-commerce-backend-two-mu.vercel.app/products"
  );

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row ">
          <div className="col-md-3 ">
            <div>
              <h4>Filters</h4>
              <p>Clear</p>
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
                          checked={gilad}
                          onChange={handleCheckboxChange}
                          name="men"
                        />
                      }
                      label="Men"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={jason}
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
                  defaultValue="4stars"
                  name="rating"
                >
                  <FormControlLabel
                    value="4stars"
                    control={<Radio />}
                    label="4 Stars & above"
                  />
                  <FormControlLabel
                    value="3stars"
                    control={<Radio />}
                    label="3 Stars & above"
                  />
                  <FormControlLabel
                    value="2stars"
                    control={<Radio />}
                    label="2 Stars & above"
                  />
                  <FormControlLabel
                    value="1stars"
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
                          image={product.productImg} // Replace with actual image
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
