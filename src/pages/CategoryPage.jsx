import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";

import foodData from "../data/FoodData";

const CategoryPage = () => {

  const { categoryName } = useParams();

  // 🔥 FILTER PRODUCTS
  const filteredItems = foodData.filter(
    (item) =>
      item.category.toLowerCase() ===
      categoryName.toLowerCase()
  );

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 6,
      }}
    >

      {/* 🔥 PAGE TITLE */}
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          mb: 5,
          textTransform: "capitalize",
        }}
      >
        {categoryName}
      </Typography>

      {/* 🔥 PRODUCTS */}
      <Grid container spacing={4}>

        {filteredItems.map((item) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={item.id}
          >

            <Box
              sx={{
                backgroundColor: "#fff",

                borderRadius: "15px",

                overflow: "hidden",

                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.08)",

                transition: "0.3s",

                "&:hover": {
                  transform:
                    "translateY(-10px)",
                },
              }}
            >

              {/* IMAGE */}
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <Box sx={{ p: 2 }}>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#47f034",
                    mt: 1,
                    fontWeight: "bold",
                  }}
                >
                  ₹{item.price}
                </Typography>

              </Box>

            </Box>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
};

export default CategoryPage;