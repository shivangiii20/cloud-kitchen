import {
  Box,
  Typography,
  Drawer,
  IconButton,
  Grid,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  Link,
} from "react-router-dom";

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

const menuItems = [
  {
    name: "Pizza",
    image: "/pizza/pizza5.jpg",
  },

  {
    name: "Thali",
    image: "/thali/thali1.jpg",
  },

  {
    name: "Burger",
    image: "/burger/burger1.jpg",
  },

  {
    name: "Paneer",
    image: "/paneer/paneer1.jpg",
  },

  {
    name: "Rolls",
    image: "/rolls/rolls1.jpg",
  },

  {
    name: "Noodles",
    image: "/noodles/noodles1.jpg",
  },

  {
    name: "Paratha",
    image: "/paratha/paratha1.jpg",
  },

  {
    name: "Sandwich",
    image: "/sandwich/sandwich1.jpg",
  },

  {
    name: "Juice",
    image: "/juice/juice1.jpg",
  },
];

const MenuBar = ({ scrolled }) => {

  const [openSidebar, setOpenSidebar] =
    useState(false);

  const [openMegaMenu, setOpenMegaMenu] =
    useState(false);

  return (
    <>

      {/* 🔥 NAVBAR */}
      <Box
        sx={{
          backgroundColor: "rgb(49, 182, 35)",

          color: "#fff",

          display: "flex",

          alignItems: "center",

          justifyContent: "space-between",

          px: {
            xs: 2,
            sm: 4,
            md: 6,
          },

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

            gap: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            position: "relative",
          }}
        >

          {/* HOME */}
          <Typography
            component={Link}
            to="/"

            sx={linkStyle}
          >
            Home
          </Typography>

          {/* ABOUT */}
          <Typography
            component={Link}
            to="/about"

            sx={linkStyle}
          >
            About
          </Typography>

          {/* 🔥 MENU MEGA DROPDOWN */}
          <Box
            onMouseEnter={() =>
              setOpenMegaMenu(true)
            }

            onMouseLeave={() =>
              setOpenMegaMenu(false)
            }

            sx={{
              position: "relative",
            }}
          >

            <Typography
              component={Link}
              to="/menu"

              sx={linkStyle}
            >
              Menu
            </Typography>

            {/* 🔥 MEGA MENU */}
            {openMegaMenu && (

              <Box
                sx={{
                  position: "absolute",

                  top: "40px",

                  left: "-250px",

                  width: "900px",

                  backgroundColor: "#fff",

                  borderRadius: "20px",

                  p: 4,

                  boxShadow:
                    "0 10px 40px rgba(0,0,0,0.15)",

                  zIndex: 999,
                }}
              >

                <Grid container spacing={4}>

                  {menuItems.map((item, index) => (

                    <Grid
                      item
                      xs={6}
                      md={3}

                      key={index}
                    >

                      <Box
                        component={Link}

                        to={`/category/${item.name.toLowerCase()}`}

                        sx={{
                          textDecoration: "none",

                          display: "flex",

                          flexDirection: "column",

                          alignItems: "center",

                          transition: "0.3s ease",

                          "&:hover": {
                            transform:
                              "translateY(-5px)",
                          },
                        }}
                      >

                        {/* IMAGE */}
                        <Box
                          component="img"

                          src={item.image}

                          alt={item.name}

                          sx={{
                            width: "110px",

                            height: "110px",

                            objectFit: "cover",

                            borderRadius: "50%",

                            mb: 2,
                          }}
                        />

                        {/* TITLE */}
                        <Typography
                          sx={{
                            color: "#000",

                            fontWeight: "bold",
                          }}
                        >
                          {item.name}
                        </Typography>

                      </Box>

                    </Grid>

                  ))}

                </Grid>

              </Box>

            )}

          </Box>

          {/* BLOG */}
          <Typography
            component={Link}
            to="/blog"

            sx={linkStyle}
          >
            Blog
          </Typography>

          {/* GALLERY */}
          <Typography
            component={Link}
            to="/gallery"

            sx={linkStyle}
          >
            Gallery
          </Typography>

          {/* CONTACT */}
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
      <Drawer
        anchor="left"

        open={openSidebar}

        onClose={() =>
          setOpenSidebar(false)
        }
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

                justifyContent:
                  "space-between",
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

                borderBottom:
                  "1px solid #eee",

                cursor: "pointer",

                transition: "0.3s",

                textDecoration: "none",

                color: "#000",

                display: "block",

                "&:hover": {
                  backgroundColor:
                    "#f5f5f5",

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

  fontWeight: "500",

  transition: "0.3s",

  "&:hover": {
    color: "#222",
  },
};

export default MenuBar;