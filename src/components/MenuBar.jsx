import {
  Box,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  "Pizza",
  "Burger",
  "Rice",
  "Rolls",
  "Pasta",
  "Noodles",
  "Momos",
  "Drinks",
  "Desserts",
  "Sandwich",
  "Paratha",
  "South Indian",
];

const MenuBar = ({ scrolled }) => {

  const [openSidebar, setOpenSidebar] =
    useState(false);

  return (
    <>

      {/* 🔥 NAVBAR */}
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
          boxShadow: scrolled
            ? "0 2px 10px rgba(0,0,0,0.1)"
            : "none",
        }}
      >

        {/* ☰ Categories */}
        <Box
          onClick={() => setOpenSidebar(true)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <MenuIcon />
          <Typography>
            All Categories
          </Typography>
        </Box>

        {/* 🔗 CENTER LINKS */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            component={Link}
            to="/"
            sx={linkStyle}
          >
            Home
          </Typography>

          <Typography
            component={Link}
            to="/about"
            sx={linkStyle}
          >
            About
          </Typography>

          <Typography
            component={Link}
            to="/menu"
            sx={linkStyle}
          >
            Menu
          </Typography>

          <Typography
            component={Link}
            to="/blog"
            sx={linkStyle}
          >
            Blog
          </Typography>

          <Typography
            component={Link}
            to="/gallery"
            sx={linkStyle}
          >
            Gallery
          </Typography>

          <Typography
            component={Link}
            to="/contact"
            sx={linkStyle}
          >
            Contact
          </Typography>
        </Box>

        {/* ☎️ SUPPORT */}
        <Box>
          <Typography>
            24/7 Support:
            +91 7535021471
          </Typography>
        </Box>
      </Box>

      {/* 🔥 SIDEBAR DRAWER */}
      {/* 🔥 SIDEBAR DRAWER */}
<Drawer
  anchor="left"
  open={openSidebar}
  onClose={() => setOpenSidebar(false)}
>

  <Box
    sx={{
      width: 280,
      height: "100%",
      backgroundColor: "#fff",
    }}
  >

    {/* 🔝 TOP SECTION */}
    <Box
      sx={{
        backgroundColor: "#47f034",
        color: "#fff",
        p: 2,
      }}
    >

      {/* LOGO + CLOSE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* 🖼 LOGO */}
        <Box
          component="img"
          src="/images/logor.png"
          alt="logo"
          sx={{
            height: "55px",
            objectFit: "contain",
          }}
        />

        {/* ❌ CLOSE BUTTON */}
        <IconButton
          onClick={() =>
            setOpenSidebar(false)
          }
          sx={{
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>

      </Box>

      {/* TITLE */}
      <Typography
        sx={{
          mt: 2,
          fontWeight: "bold",
          fontSize: "1.1rem",
        }}
      >
        Browse Categories
      </Typography>

    </Box>

    {/* 📂 CATEGORY LIST */}
    {/* 📂 CATEGORY LIST */}
{categories.map((item, index) => (

  <Box
    component={Link}

    to={`/category/${item.toLowerCase()}`}

    key={index}

    onClick={() =>
      setOpenSidebar(false)
    }

    sx={{
      p: 2,

      borderBottom: "1px solid #eee",

      cursor: "pointer",

      transition: "0.3s",

      textDecoration: "none",

      color: "#000",

      display: "block",

      "&:hover": {
        backgroundColor: "#f5f5f5",
        pl: 3,
      },
    }}
  >

    <Typography>
      {item}
    </Typography>

  </Box>

))}

  </Box>
</Drawer>
    </>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",

  "&:hover": {
    color: "#222",
  },
};

export default MenuBar; // code without Transition