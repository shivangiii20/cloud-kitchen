import { Box, Typography, Button } from "@mui/material";

const PromoBanner = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "1fr 1fr",
        },
        gap: 3,
        px: { xs: 2, sm: 3, md: 4 },
        py: 5,
      }}
    >
      {/* 🔥 Banner 1 */}
      <Box
        sx={{
          height: { xs: "180px", sm: "220px", md: "260px" },
          backgroundImage: "url('/banners/banner1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          p: { xs: 2, sm: 3, md: 4 },
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.1)",
            borderRadius: "12px",
          }}
        />

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: {
                xs: "1.2rem",
                sm: "1.6rem",
                md: "2rem",
              },
            }}
          >
            Cloud Kitchen
          </Typography>

          <Typography
            sx={{
              color: "#eee",
              mb: 2,
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            Taste That Keeps You Hooked
          </Typography>

          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: "30px",
              px: { xs: 2, sm: 3 },
              fontSize: { xs: "0.7rem", sm: "0.9rem" },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Box>

      {/* 🔥 Banner 2 */}
      <Box
        sx={{
          height: { xs: "180px", sm: "220px", md: "260px" },
          backgroundImage: "url('/banners/b.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          p: { xs: 2, sm: 3, md: 4 },
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.1)",
            borderRadius: "12px",
          }}
        />

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: {
                xs: "1.2rem",
                sm: "1.6rem",
                md: "2rem",
              },
            }}
          >
            Fast Food Deals
          </Typography>

          <Typography
            sx={{
              color: "#eee",
              mb: 2,
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            Starting at just ₹99
          </Typography>

          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: "30px",
              px: { xs: 2, sm: 3 },
              fontSize: { xs: "0.7rem", sm: "0.9rem" },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PromoBanner;