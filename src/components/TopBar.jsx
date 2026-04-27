import { Box, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f57c00",
        color: "#fff",
        textAlign: "center",
        py: 2,
      }}
    >
      <Typography sx={{
    fontSize: {
      xs: "1rem",
                sm: "1.3rem",
                md: "1.5rem",
                lg: "1.1rem",
    },
  }} >
        🚚 Free Delivery on orders above ₹499
      </Typography>
    </Box>
  );
};

export default TopBar;