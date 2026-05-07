import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Name Validation (only letters and spaces)
    if (name === "name") {
      const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, name: onlyLetters });
      return;
    }

    // ✅ Phone Validation
    if (name === "phone") {
      const validPhone = value.replace(/[^0-9+\-]/g, "");
      setFormData({ ...formData, phone: validPhone });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};

    // Name
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    // Phone
    const digitsOnly = formData.phone.replace(/\D/g, "");

    if (digitsOnly.length < 10 || digitsOnly.length > 12) {
      tempErrors.phone = "Phone number must be 10-12 digits";
    }

    // Email
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Enter valid email address";
    }

    // Password
    if (formData.password.length < 6) {
      tempErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Signup Successful 🎉");
    }
  };

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
          Create Account
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#eee",
            mb: 4,
          }}
        >
          Join FlatsKitchen today 🍕
        </Typography>

        {/* NAME */}
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          FormHelperTextProps={{
            style: { color: "#ffb3b3" },
          }}
          sx={textfieldStyle}
        />

        {/* PHONE */}
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          margin="normal"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          FormHelperTextProps={{
            style: { color: "#ffb3b3" },
          }}
          sx={textfieldStyle}
        />

        {/* EMAIL */}
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          FormHelperTextProps={{
            style: { color: "#ffb3b3" },
          }}
          sx={textfieldStyle}
        />

        {/* PASSWORD */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          margin="normal"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          FormHelperTextProps={{
            style: { color: "#ffb3b3" },
          }}
          sx={textfieldStyle}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
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
          Sign Up
        </Button>

        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            mt: 3,
          }}
        >
          Already have an account?{" "}
          <Link
            to="/myaccount"
            style={{
              color: "#4caf50",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

const textfieldStyle = {
  input: { color: "#fff" },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },

    "&:hover fieldset": {
      borderColor: "#4caf50",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#4caf50",
    },
  },
};

export default Signup;