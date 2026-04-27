import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBar = ({scrolled}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#47f034ff",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 6 },
        py: 1.5,
        position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",

      }}
    >
      {/* Left - Categories */}
   <Box sx={{ display: "flex", alignItems: "center" }}>
  {scrolled ? (
    <img
      src="/images/logor.png"
      alt="logo"
      style={{
        height: "60px",
        
        objectFit: "contain",
        cursor: "pointer",
      }}
    />
  ) : (
    <span>☰ All Categories</span>
  )}
</Box>

      {/* Center - Menu Links */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, sm: 3, md: 4 },
        }}
      >
       <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
  Home
</Typography>
        <Typography component={Link} to="/about" sx={{ textDecoration: "none", color: "inherit" }}>
  About
</Typography>
       <Typography component={Link} to="/menu" sx={{ textDecoration: "none", color: "inherit" }}>
  Menu
</Typography> 
        <Typography component={Link} to="/blog" sx={{ textDecoration: "none", color: "inherit" }}>
  Blog
</Typography>

        <Typography component={Link} to="/gallery" sx={{ textDecoration: "none", color: "inherit" }}>
  Gallery
</Typography>
        <Typography component={Link} to="/contact" sx={{ textDecoration: "none", color: "inherit" }}>
  Contact
</Typography>
      </Box>

      {/* Right - Support */}
      <Box>
  {scrolled ? (
    <>
      <Link to="/myaccount" style={{ textDecoration: "none", marginRight: "10px" }}>
        👤
      </Link>

      <Link to="/cart" style={{ textDecoration: "none" }}>
        🛒
      </Link>
    </>
  ) : (
    <span>24/7 Support: +91 7535021471</span>
  )}
</Box>
    </Box>
  );
};

export default MenuBar;