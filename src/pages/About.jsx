import { Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const About = () => {
  return (
    <Box>

      {/* 🔥 HERO SECTION */}
      <Box
        sx={{
          height: { xs: "200px", sm: "250px", md: "300px" },
          backgroundImage: "url('/about/aboutbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Where Every Meal Feels Like Home
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: "bold",
            letterSpacing: "1px",
            mt: 1,
          }}
        >
          Discover the story behind our passion for fresh, homemade meals
        </Typography>
      </Box>
{/* 🔥 ABOUT CONTENT */}
<Box
  sx={{
    px: { xs: 2, sm: 4, md: 8 },
    py: 8,
    backgroundColor: "#f8f8f8",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      gap: 6,
    }}
  >

    {/* 🖼️ LEFT IMAGE SECTION */}
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: { xs: "100%", md: "45%" },
        justifyContent: "center",
      }}
    >
      {/* First Image */}
      <Box
        component="img"
        src="/about/about1.jpg"
        alt="food"
        sx={{
          width: "48%",
          height: { xs: "250px", sm: "400px" },
          objectFit: "cover",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      />

      {/* Second Image */}
      <Box
        component="img"
        src="/about/about2.jpg"
        alt="food"
        sx={{
          width: "48%",
          height: { xs: "250px", sm: "400px" },
          objectFit: "cover",
          borderRadius: "12px",
          mt: { md: -5 },
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      />
    </Box>

    {/* 📝 RIGHT TEXT SECTION */}
    <Box
      sx={{
        width: { xs: "100%", md: "55%" },
      }}
    >
      <Typography
        sx={{
          color: "#4caf50",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        About Cloud Kitchen
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
          lineHeight: 1.2,
          mb: 3,
        }}
      >
        We Provide Fresh, Diverse, and Convenient meals delivered straight from our kitchen.
      </Typography>

      <Typography
        sx={{
          color: "#555",
          lineHeight: 1.9,
          mb: 3,
        }}
      >
        Welcome to Cloud Kitchen, your go-to cloud kitchen for fresh,
        delicious, and wholesome meals delivered right to your doorstep.
      </Typography>

      <Typography
        sx={{
          color: "#555",
          lineHeight: 1.9,
        }}
      >
        Whether you're craving comfort food or looking for healthier
        options, Cloud Kitchen is here to make every meal unforgettable.
      </Typography>
    </Box>

  </Box>
</Box>


{/* 🔥 TESTIMONIALS */}
<Box
  sx={{
    px: { xs: 2, sm: 4, md: 6 },
    py: 10,
    textAlign: "center",
    position: "relative",
    overflow: "hidden",

    backgroundImage: "url('/about/testimonialbg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Blur Overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backdropFilter: "blur(7px)",
      backgroundColor: "rgba(0, 0, 0, 0)",
      zIndex: 1,
    }}
  />

  {/* Content */}
  <Box sx={{ position: "relative", zIndex: 2 }}>

    <Typography
      sx={{
        fontSize: { xs: "2rem", sm: "2.5rem" },
        fontWeight: "bold",
        mb: 6,
        color: "#fff",
      }}
    >
      What Our Customers Say
    </Typography>

    <Swiper
      modules={[Autoplay]}
      spaceBetween={25}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={6000}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {[
        {
          name: "Aryan Sharma",
          image: "/about/user1.jpg",
          text: "Amazing food quality and super fast delivery service!",
        },
        {
          name: "Sushila Jain",
          image: "/about/user2.jpg",
          text: "Feels exactly like homemade food every single time.",
        },
        {
          name: "Neha Gupta",
          image: "/about/user3.jpg",
          text: "Best cloud kitchen experience I’ve had so far.",
        },
        {
          name: "Rahul Singh",
          image: "/about/user4.jpg",
          text: "Packaging was clean and food tasted fantastic.",
        },
        {
          name: "Digvijay Bansal",
          image: "/about/user5.jpg",
          text: "Healthy meals with affordable pricing. Loved it!",
        },
        {
          name: "Karan Patel",
          image: "/about/user6.jpg",
          text: "Delivery was quick and food arrived hot.",
        },
        {
          name: "Sneha Kapoor",
          image: "/about/user7.jpg",
          text: "Their pasta and rice bowls are absolutely delicious.",
        },
        {
          name: "Naina Rastogi",
          image: "/about/user8.jpg",
          text: "Very hygienic cooking and premium quality ingredients.",
        },
      ].map((item, i) => (
        <SwiperSlide key={i}>
  <Box
    sx={{
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.2)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      p: 4,
      minHeight: "320px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      transition: "0.3s",

      "&:hover": {
        transform: "translateY(-10px)",
      },
    }}
  >

    {/* 👤 USER IMAGE */}
    <Box
      component="img"
      src={item.image}
      alt={item.name}
      sx={{
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        objectFit: "cover",
        mb: 2,
        border: "3px solid #4caf50",
      }}
    />

    {/* ⭐ REVIEW TEXT */}
    <Typography
      sx={{
        color: "#fff",
        mb: 3,
        lineHeight: 1.8,
      }}
    >
      "{item.text}"
    </Typography>

    {/* 👤 NAME */}
    <Typography
      sx={{
        color: "#4caf50",
        fontWeight: "bold",
        fontSize: "1.1rem",
      }}
    >
      {item.name}
    </Typography>

  </Box>
</SwiperSlide>
      ))}
    </Swiper>

  </Box>
</Box>

      

    </Box>
  );
};

export default About;