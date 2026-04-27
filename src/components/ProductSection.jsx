import { Box, Typography, Grid, Button } from "@mui/material";

const products = [
  {
    name: "Veg Momos",
    price: 120,
    oldPrice: 150,
    image: "/products/vegmomos.jpg",
  },
  {
    name: "Daal Fry",
    price: 170,
    oldPrice: 200,
    image: "/products/daalfry.png",
  },
  {
    name: "Paneer Momos",
    price: 160,
    oldPrice: 180,
    image: "/products/paneermomos.jpg",
  },
  {
    name: "Lassi",
    price: 140,
    oldPrice: 170,
    image: "/products/lassi.png",
  },
  {
    name: "Samosa",
    price: 180,
    oldPrice: 220,
    image: "/products/samosa.jpg",
  },
  {
    name: "Mango-Milk Shake",
    price: 200,
    oldPrice: 240,
    image: "/products/mangoshake.png",
  },
  {
    name: "Aalu Puri Thali",
    price: 110,
    oldPrice: 140,
    image: "/products/aalupuri.jpg",
  },
  {
    name: " Malayi Kofta",
    price: 130,
    oldPrice: 160,
    image: "/products/kofta.jpg",
  },
];

const ProductSection = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 5 }}>
      
      {/* 🔥 Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1.5rem",
            sm: "1.8rem",
            md: "2.2rem",
            lg: "2.5rem",
          },
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Today’s Favorites
      </Typography>

      {/* 🔥 Grid */}
      <Grid container spacing={3}>
        {products.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Box
              sx={{
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {/* 🔥 Image Wrapper */}
              <Box
                sx={{
                  position: "relative",
                  width: {
                    xs: "120px",
                    sm: "140px",
                    md: "160px",
                    lg: "180px",
                  },
                  height: {
                    xs: "120px",
                    sm: "140px",
                    md: "160px",
                    lg: "180px",
                  },
                  mx: "auto",
                  borderRadius: "50%",
                  overflow: "hidden",
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* 🔥 Hover Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "0.3s",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>

              {/* Name */}
              <Typography sx={{ mt: 1 }}>
                {item.name}
              </Typography>

              {/* 🔥 Price Section */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <Typography sx={{ color: "green", fontWeight: "bold" }}>
                  ₹{item.price}
                </Typography>

                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "0.9rem",
                  }}
                >
                  ₹{item.oldPrice}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default ProductSection;