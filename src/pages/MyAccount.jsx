import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/images/loginbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: "450px",
          p: { xs: 3, sm: 5 },
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "#fff",
            mb: 1,
          }}
        >
          Welcome Back
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#eee",
            mb: 4,
          }}
        >
          Login to continue ordering delicious meals 🍔
        </Typography>

        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#fff",
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#fff",
              },
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            backgroundColor: "#4caf50",
            borderRadius: "10px",
            fontWeight: "bold",

            "&:hover": {
              backgroundColor: "#43a047",
            },
          }}
        >
          Login
        </Button>

        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            mt: 3,
          }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#4caf50",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default MyAccount;