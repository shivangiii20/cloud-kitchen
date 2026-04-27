import { Box, Typography, IconButton } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const products = [
  { name: "Thali", price: 130, oldPrice: 250, image: "/popular/p1.jpg" },
  { name: "Ghar Thali", price: 250, oldPrice: 300, image: "/popular/p2.jpg" },
  { name: "Pizza", price: 170, oldPrice: 220, image: "/popular/p3.jpg" },
  { name: "Wrap", price: 80, oldPrice: 120, image: "/popular/p4.jpg" },
  { name: "Burger", price: 120, oldPrice: 150, image: "/popular/p5.jpg" },
  { name: "Momos", price: 100, oldPrice: 140, image: "/popular/p6.jpg" },
  { name: "Paneer", price: 180, oldPrice: 220, image: "/popular/p7.jpg" },
  { name: "Roll", price: 90, oldPrice: 120, image: "/popular/p8.jpg" },
  { name: "Noodles", price: 110, oldPrice: 150, image: "/popular/p9.jpg" },
  { name: "Sandwich", price: 95, oldPrice: 130, image: "/popular/p10.jpg" },
  { name: "Shake", price: 200, oldPrice: 240, image: "/popular/p11.jpg" },
  { name: "Dosa", price: 130, oldPrice: 180, image: "/popular/p12.jpg" },
  { name: "Rice", price: 140, oldPrice: 180, image: "/popular/p13.jpg" },
  { name: "Chaat", price: 80, oldPrice: 120, image: "/popular/p14.jpg" },
  { name: "Soup", price: 90, oldPrice: 120, image: "/popular/p15.jpg" },
  { name: "Ice Cream", price: 70, oldPrice: 100, image: "/popular/p16.jpg" },
];

const PopularSection = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 6 }}>
      
      {/* 🔥 Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Most Ordered
      </Typography>

      {/* 🔥 Wrapper */}
      <Box sx={{ position: "relative" }}>
        
        {/* Left Button */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: -10,
            top: "40%",
            zIndex: 2,
            background: "#fff",
            boxShadow: 2,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Right Button */}
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: -10,
            top: "40%",
            zIndex: 2,
            background: "#fff",
            boxShadow: 2,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* 🔥 Slider */}
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {products.map((item, i) => (
            <Box
              key={i}
              sx={{
                minWidth: {
                  xs: "120px",
                  sm: "150px",
                  md: "180px",
                },
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  transition: "0.3s",
                  "&:hover .overlay": { opacity: 1 },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Hover overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "0.3s",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "0.8rem",
                      background: "#38a169",
                      px: 2,
                      py: 0.5,
                      borderRadius: "20px",
                    }}
                  >
                    Add to Cart
                  </Typography>
                </Box>
              </Box>

              {/* Name */}
              <Typography sx={{ mt: 1, fontSize: "0.9rem" }}>
                {item.name}
              </Typography>

              {/* Price */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <Typography sx={{ color: "green", fontWeight: "bold" }}>
                  ₹{item.price}
                </Typography>
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "0.8rem",
                  }}
                >
                  ₹{item.oldPrice}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularSection;