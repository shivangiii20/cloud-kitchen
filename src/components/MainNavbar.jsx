import {
  Box,
  TextField,
  Button,
  IconButton,
  MenuItem,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

const categories = [
  "All",
  "Beverage",
  "Pizza",
  "Burger",
  "Momos",
  "Paneer",
  "Rolls",
  "Noodles",
  "Paratha",
  "Sandwich",
  "Rice",
  "Chaat",
  "Chaap",
  "Juice",
  "Desserts",
  "Maggie",
  "Tiffin",
];

const MainNavbar = () => {

  const navigate = useNavigate();

  const [searchText, setSearchText] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // 🔍 SEARCH FUNCTION
  const handleSearch = () => {

    // If user typed food/category
    if (searchText.trim() !== "") {

      navigate(
        `/category/${searchText.toLowerCase()}`
      );

      return;
    }

    // If dropdown category selected
    if (selectedCategory !== "All") {

      navigate(
        `/category/${selectedCategory.toLowerCase()}`
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",

        justifyContent: "space-between",

        flexWrap: "wrap",

        gap: 3,

        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },

        py: 2,

        backgroundColor: "#f5f5f5",
      }}
    >

      {/* 🔶 LOGO */}
      <Box>

        <img
          src="/images/logor.png"
          alt="logo"

          style={{
            height: "70px",

            objectFit: "contain",

            cursor: "pointer",
          }}
        />

      </Box>

      {/* 🔍 MODERN SEARCH BAR */}
      <Box
        sx={{
          display: "flex",

          alignItems: "center",

          width: {
            xs: "100%",
            md: "55%",
          },

          backgroundColor: "#fff",

          borderRadius: "60px",

          overflow: "hidden",

          boxShadow:
            "0 8px 25px rgba(0,0,0,0.08)",

          border:
            "1px solid rgba(0,0,0,0.05)",

          transition: "0.3s ease",

          "&:hover": {
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.12)",
          },
        }}
      >

        {/* 📂 CATEGORY DROPDOWN */}
        <TextField
          select

          value={selectedCategory}

          onChange={(e) =>
            setSelectedCategory(
              e.target.value
            )
          }

          size="small"

          sx={{
            minWidth: {
              xs: "120px",
              md: "190px",
            },

            backgroundColor: "#fafafa",

            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
            },

            "& .MuiOutlinedInput-notchedOutline":
              {
                border: "none",
              },
          }}
        >

          {categories.map((item) => (

            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>

          ))}

        </TextField>

        {/* 🔎 SEARCH INPUT */}
        <TextField
          fullWidth

          value={searchText}

          onChange={(e) =>
            setSearchText(
              e.target.value
            )
          }

          placeholder="Search delicious food..."

          size="small"

          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
            },

            "& .MuiOutlinedInput-notchedOutline":
              {
                border: "none",
              },
          }}
        />

        {/* 🔍 SEARCH BUTTON */}
        <Button
          variant="contained"

          onClick={handleSearch}

          sx={{
            px: {
              xs: 3,
              md: 5,
            },

            height: "100%",

            borderRadius: 0,

            backgroundColor: "#2bab1d",

            color: "#fff",

            fontWeight: "bold",

            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#36c428",
            },
          }}
        >
          Search
        </Button>

      </Box>

      {/* 🟢 ICONS */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >

        <IconButton
          component={Link}
          to="/myaccount"

          sx={{
            backgroundColor: "#fff",

            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",

            "&:hover": {
              backgroundColor: "#47f034",
              color: "#fff",
            },
          }}
        >
          <AccountCircleIcon />
        </IconButton>

        <IconButton
          component={Link}
          to="/cart"

          sx={{
            backgroundColor: "#fff",

            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",

            "&:hover": {
              backgroundColor: "#47f034",
              color: "#fff",
            },
          }}
        >
          <ShoppingCartIcon />
        </IconButton>

      </Box>

    </Box>
  );
};

export default MainNavbar;