import {
  Box,
  Typography,
} from "@mui/material";

const Gallery = () => {

  return (
    <Box>

      {/* 🔥 HERO VIDEO SECTION */}
      <Box
        sx={{
          position: "relative",

          height: {
            xs: "350px",
            sm: "450px",
            md: "650px",
            lg: "780px",
          },

          overflow: "hidden",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        {/* 🎥 BACKGROUND VIDEO */}
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline

          sx={{
            position: "absolute",

            top: 0,
            left: 0,

            width: "100%",
            height: "100%",

            objectFit: "cover",

            objectPosition: "center 18%",
          }}
        >
          <source
            src="/video/gallerybg.mp4"
            type="video/mp4"
          />
        </Box>

        {/* 🌑 DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",

            top: 0,
            left: 0,

            width: "100%",
            height: "100%",

            background:
              "rgba(0,0,0,0.22)",

            zIndex: 1,
          }}
        />

        {/* ✨ HERO CONTENT */}
        <Box
          sx={{
            position: "relative",

            zIndex: 2,

            textAlign: "center",

            px: 2,
          }}
        >

          <Typography
            sx={{
              color: "#fff",

              fontWeight: "bold",

              fontSize: {
                xs: "2.3rem",
                sm: "3rem",
                md: "4.5rem",
              },

              lineHeight: 1.2,
            }}
          >
            A Feast For Your Eyes 🍕
          </Typography>

          <Typography
            sx={{
              color: "#ddd",

              mt: 2,

              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },

              maxWidth: "700px",

              mx: "auto",
            }}
          >
            Explore our delicious food moments,
            chef specials, and customer favorites.
          </Typography>

        </Box>

      </Box>



      {/* 🔥 SIGNATURE DISHES SECTION */}
<Box
  sx={{
    backgroundColor: "#0f0f0f",

    py: {
      xs: 8,
      md: 14,
    },

    px: {
      xs: 2,
      md: 8,
    },
  }}
>

  {/* 🔥 SECTION TITLE */}
  <Box
    sx={{
      textAlign: "center",
      mb: 10,
    }}
  >

    <Typography
      sx={{
        color: "#47f034",

        fontWeight: "bold",

        letterSpacing: "4px",

        mb: 2,

        fontSize: {
          xs: "0.9rem",
          md: "1rem",
        },
      }}
    >
      CHEF'S SPECIAL
    </Typography>

    <Typography
      sx={{
        color: "#fff",

        fontWeight: "bold",

        fontSize: {
          xs: "2.3rem",
          md: "4rem",
        },

        lineHeight: 1.2,
      }}
    >
      Signature Dishes Crafted
      With Passion 🍴
    </Typography>

  </Box>

  {/* 🔥 FIRST ITEM */}
  <Box
    sx={{
      display: "flex",

      flexDirection: {
        xs: "column",
        md: "row",
      },

      alignItems: "center",

      gap: {
        xs: 5,
        md: 10,
      },

      mb: 14,
    }}
  >

    {/* IMAGE */}
    <Box
      sx={{
        flex: 1,

        position: "relative",
      }}
    >

      <Box
        component="img"
        src="/sandwich/sandwich1.jpg"
        alt="pizza"

        sx={{
          width: "100%",

          borderRadius: "30px",

          objectFit: "cover",

          transition: "0.5s ease",

          '&:hover': {
            transform: "scale(1.03)",
          },
        }}
      />

      {/* GLOW */}
      <Box
        sx={{
          position: "absolute",

          width: "250px",
          height: "250px",

          background:
            "#47f034",

          filter: "blur(140px)",

          opacity: 0.25,

          top: "-40px",
          left: "-40px",

          zIndex: -1,
        }}
      />

    </Box>

    {/* TEXT */}
    <Box
      sx={{
        flex: 1,
      }}
    >

      <Typography
        sx={{
          color: "#47f034",

          fontWeight: "bold",

          letterSpacing: "3px",

          mb: 2,
        }}
      >
        HOT & FRESH
      </Typography>

      <Typography
        sx={{
          color: "#fff",

          fontWeight: "bold",

          fontSize: {
            xs: "2rem",
            md: "3.5rem",
          },

          lineHeight: 1.2,

          mb: 3,
        }}
      >
        Cheesy Veg Sandwich
      </Typography>

      <Typography
        sx={{
          color: "#bdbdbd",

          lineHeight: 1.9,

          fontSize: {
            xs: "1rem",
            md: "1.1rem",
          },

          mb: 4,
        }}
      >
        Loaded with premium cheese,
        farm fresh vegetables, and
        authentic Italian flavors
        baked to perfection.
      </Typography>

      <Typography
        sx={{
          color: "#fff",

          fontSize: "2rem",

          fontWeight: "bold",
        }}
      >
        ₹499
      </Typography>

    </Box>

  </Box>

  {/* 🔥 SECOND ITEM */}
  <Box
    sx={{
      display: "flex",

      flexDirection: {
        xs: "column-reverse",
        md: "row",
      },

      alignItems: "center",

      gap: {
        xs: 5,
        md: 10,
      },
    }}
  >

    {/* TEXT */}
    <Box
      sx={{
        flex: 1,
      }}
    >

      <Typography
        sx={{
          color: "#47f034",

          fontWeight: "bold",

          letterSpacing: "3px",

          mb: 2,
        }}
      >
        CUSTOMER FAVORITE
      </Typography>

      <Typography
        sx={{
          color: "#fff",

          fontWeight: "bold",

          fontSize: {
            xs: "2rem",
            md: "3.5rem",
          },

          lineHeight: 1.2,

          mb: 3,
        }}
      >
        Creamy White
        Sauce Pasta 🍝
      </Typography>

      <Typography
        sx={{
          color: "#bdbdbd",

          lineHeight: 1.9,

          fontSize: {
            xs: "1rem",
            md: "1.1rem",
          },

          mb: 4,
        }}
      >
        Rich creamy pasta tossed with
        exotic herbs, fresh vegetables,
        and signature sauces prepared
        by our expert chefs.
      </Typography>

      <Typography
        sx={{
          color: "#fff",

          fontSize: "2rem",

          fontWeight: "bold",
        }}
      >
        ₹349
      </Typography>

    </Box>

    {/* IMAGE */}
    <Box
      sx={{
        flex: 1,

        position: "relative",
      }}
    >

      <Box
        component="img"
        src="/pasta/pasta1.jpg"
        alt="pasta"

        sx={{
          width: "100%",

          borderRadius: "30px",

          objectFit: "cover",

          transition: "0.5s ease",

          '&:hover': {
            transform: "scale(1.03)",
          },
        }}
      />

      {/* GLOW */}
      <Box
        sx={{
          position: "absolute",

          width: "250px",
          height: "250px",

          background:
            "#47f034",

          filter: "blur(140px)",

          opacity: 0.25,

          bottom: "-40px",
          right: "-40px",

          zIndex: -1,
        }}
      />

    </Box>

  </Box>

</Box>

    </Box>
  );
};

export default Gallery;