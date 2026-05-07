import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name only letters
    if (name === "name") {
      const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, name: onlyLetters });
      return;
    }

    // Phone only numbers + - 
    if (name === "phone") {
      const validPhone = value.replace(/[^0-9+\-]/g, "");
      setFormData({ ...formData, phone: validPhone });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // ✅ Validation
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
      tempErrors.email = "Enter a valid email address";
    }

    // Message minimum 100 words
    const wordCount =
      formData.message.trim().split(/\s+/).length;

    if (wordCount < 100) {
      tempErrors.message =
        `Message must contain at least 100 words (${wordCount}/100)`;
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Submit
  const handleSubmit = () => {
    if (validate()) {
      alert("Message Sent Successfully 🚀");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/images/contactbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
        px: 2,
      }}
    >

      {/* DARK OVERLAY */}
      <Box
        sx={{
          backgroundColor: "rgba(199, 188, 188, 0)",
          borderRadius: "25px",
          maxWidth: "1200px",
          mx: "auto",
          p: { xs: 3, md: 6 },
          backdropFilter: "blur(2px)",
        }}
      >

        <Grid container spacing={6} alignItems="center">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={5}>

            <Typography
              sx={{
                color: "#0dff08",
                fontWeight: "bold",
                mb: 2,
                letterSpacing: 1,
              }}
            >
              CONTACT US
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "2.2rem", md: "3rem" },
                fontWeight: "bold",
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              We'd Love To Hear From You 🍔
            </Typography>

            <Typography
              sx={{
                color: "#ddd",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              Have questions, feedback, or special meal requests?
              Our team is always ready to help you with the best
              cloud kitchen experience possible.
            </Typography>

          </Grid>

          {/* RIGHT FORM */}
          <Grid item xs={12} md={7}>

            <Paper
              elevation={10}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "25px",
                background: "rgb(247, 246, 246)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 40px rgb(48, 47, 47)",
              }}
            >

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

              {/* MESSAGE */}
              <TextField
                fullWidth
                multiline
                rows={6}
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
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
                  py: 1.7,
                  backgroundColor: "#1af221",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "1rem",

                  "&:hover": {
                    backgroundColor: "#17951c",
                  },
                }}
              >
                Send Message
              </Button>

            </Paper>

          </Grid>

        </Grid>

      </Box>
    </Box>
  );
};

const textfieldStyle = {
  input: {
    color: "#fff",
    fontWeight: 500,
  },

  textarea: {
    color: "#fff",
    fontWeight: 500,
  },

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

export default Contact;