import { Box, TextField, Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 6 },
        py: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* 🔶 Logo (IMAGE instead of text) */}
      <Box>
        <img
          src="/images/logor.png"
          alt="logo"
          style={{
            height: "60px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Box>

      {/* 🔍 Search Bar */}
      <Box
        sx={{
          display: "flex",
          width: "50%",
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search Product"
          size="small"
        />
        <Button variant="contained" color="success">
          Search
        </Button>
      </Box>

      {/* 🟢 Icons (ROUTABLE) */}
      <Box>
        <IconButton
          component={Link}
          to="/myaccount"
        >
          <AccountCircleIcon />
        </IconButton>

        <IconButton
          component={Link}
          to="/cart"
        >
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MainNavbar;