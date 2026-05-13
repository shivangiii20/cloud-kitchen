 import {
  Box,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

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
];

const CategorySidebar = ({
  openSidebar,
}) => {

  return (
    <Box
      sx={{
        width: openSidebar ? "260px" : "0px",
        overflow: "hidden",

        transition: "0.4s ease",

        backgroundColor: "#fff",

        borderRight:
          openSidebar
            ? "1px solid #eee"
            : "none",

        height: "100vh",

        position: "sticky",

        top: "70px",

        flexShrink: 0,
      }}
    >

      {/* TOP */}
      <Box
        sx={{
          backgroundColor: "#47f034",
          color: "#fff",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="/images/logor.png"
          alt="logo"
          sx={{
            height: "55px",
            objectFit: "contain",
          }}
        />

        <Typography
          sx={{
            mt: 2,
            fontWeight: "bold",
          }}
        >
          Browse Categories
        </Typography>
      </Box>

      {/* CATEGORY ITEMS */}
      {categories.map((item, index) => (

        <Box
          component={Link}
          to={`/category/${item.toLowerCase()}`}

          key={index}

          sx={{
            p: 2,

            borderBottom:
              "1px solid #eee",

            textDecoration: "none",

            color: "#000",

            display: "block",

            transition: "0.3s",

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
  );
};

export default CategorySidebar;