import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const tags = [
    "Home Food Delivery",
    "Tiffin Service",
    "Healthy Meals",
    "Veg Thali",
    "North Indian Food",
    "South Indian Food",
    "Snacks",
    "Fast Food",
    "Diet Food",
    "Homemade Food",
    "Food Delivery Near Me",
    "Best Food Delivery",
  ];

  return (
    <Box sx={{ backgroundColor: "#111", color: "#fff", mt: 6 }}>

      {/* 🔥 TOP SECTION */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1.5fr 1fr 1fr 1fr",
          },
          gap: 4,
          px: { xs: 2, sm: 4, md: 6 },
          py: 5,
        }}
      >

        {/* 🟢 Brand */}
        <Box>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 1 }}>
            CloudKitchen
          </Typography>

          <Typography sx={{ color: "#aaa", fontSize: "0.9rem" }}>
            Fresh & hygienic homemade food delivered to your doorstep.
            Serving happiness with every meal.
          </Typography>
        </Box>

        {/* 🔗 Links */}
        <Box>
          <Typography sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>

          {["Home", "Menu", "Blog", "Contact"].map((item) => (
            <Typography
              key={item}
              sx={{
                color: "#aaa",
                mb: 1,
                cursor: "pointer",
                "&:hover": { color: "#4caf50" },
              }}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* 🍽 Categories */}
        <Box>
          <Typography sx={{ fontWeight: "bold", mb: 2 }}>
            Categories
          </Typography>

          {["Paneer", "Rice", "Pizza", "Paratha", "Rolls"].map((item) => (
            <Typography
              key={item}
              sx={{
                color: "#aaa",
                mb: 1,
                cursor: "pointer",
                "&:hover": { color: "#4caf50" },
              }}
              onClick={() => navigate("/menu")}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* 📞 Contact */}
        <Box>
          <Typography sx={{ fontWeight: "bold", mb: 2 }}>
            Contact
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 1 }}>
            📍 Gaur City, Greater Noida
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 2 }}>
            📞 +91 7535021471
          </Typography>

          {/* Social */}
          <Box>
            <IconButton sx={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* 🔥 SEO TAG SECTION */}
      <Box
        sx={{
          borderTop: "1px solid #333",
          px: { xs: 2, sm: 4, md: 6 },
          py: 3,
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {tags.map((tag, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #444",
              px: 1.5,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "0.8rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#4caf50",
                borderColor: "#4caf50",
              },
            }}
            onClick={() => navigate("/menu")}
          >
            {tag}
          </Box>
        ))}
      </Box>

      {/* 🔥 BOTTOM */}
      <Box
        sx={{
          borderTop: "1px solid #333",
          textAlign: "center",
          py: 2,
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        © 2026 CloudKitchen. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;