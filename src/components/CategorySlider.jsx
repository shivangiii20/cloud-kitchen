import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

const categories = [
  { name: "Paneer", image: "/carousel/paneer.jpg" },
  { name: "Rolls", image: "/carousel/rolls.jpg" },
  { name: "Noodles", image: "/carousel/noodles.jpg" },
  { name: "Paratha", image: "/carousel/paratha.jpg" },
  { name: "Sandwich", image: "/carousel/sandwich.jpg" },
  { name: "Rice", image: "/carousel/rice.jpg" },
  { name: "Pizza", image: "/carousel/pizza.jpg" },
  { name: "Burger", image: "/carousel/burger.png" },
  { name: "Momos", image: "/carousel/momos.jpg" },
  { name: "Chole Bhature", image: "/carousel/cholebhature.jpg" },
];

const CategorySlider = () => {
  const sliderRef = useRef(null);

  // 🔥 Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += 1;

        // loop back
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      ref={sliderRef}
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4, md: 6 },
        py: 3,

        scrollBehavior: "smooth",

        // hide scrollbar
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {categories.map((item, index) => (
        <Box
          key={index}
          sx={{
            minWidth: {
              xs: "80px",
              sm: "100px",
              md: "120px",
              lg: "140px",
            },
            textAlign: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: {
                xs: "60px",
                sm: "80px",
                md: "100px",
                lg: "110px",
              },
              height: {
                xs: "60px",
                sm: "80px",
                md: "100px",
                lg: "110px",
              },
              mx: "auto",
              borderRadius: "50%",
              overflow: "hidden",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
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
          </Box>

          <Typography
            sx={{
              mt: 1,
              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
                md: "1rem",
                lg: "1.1rem",
              },
            }}
          >
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CategorySlider;