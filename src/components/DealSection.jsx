import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

const DealSection = () => {
  const [time, setTime] = useState({
    days: 1,
    hours: 14,
    minutes: 32,
    seconds: 60,
  });

  // 🔥 Real Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 6 },
        py: 8,
        background: "linear-gradient(135deg, #f9fafb, #edf2f7)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          alignItems: "center",
          gap: 4,
          background: "#fff",
          borderRadius: "20px",
          p: { xs: 2, sm: 3, md: 4 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {/* 🔥 Left Content */}
        <Box>
          <Typography
            sx={{
              color: "#38a169",
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Best Deals of the Week
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "1.6rem",
                sm: "2.2rem",
                md: "2.6rem",
              },
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Grab The Best Offer Before It Ends!
          </Typography>

          <Typography
            sx={{
              color: "#666",
              mb: 3,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Freshly cooked meals delivered straight to your doorstep.
          </Typography>

          {/* 🔥 Countdown */}
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            {[
              { label: "DAYS", value: time.days },
              { label: "HRS", value: time.hours },
              { label: "MINS", value: time.minutes },
              { label: "SECS", value: time.seconds },
            ].map((item, i) => (
              <Box key={i} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: { xs: 50, sm: 60 },
                    height: { xs: 50, sm: 60 },
                    borderRadius: "50%",
                    background: "#38a169",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    boxShadow: "0 4px 12px rgba(56,161,105,0.4)",
                  }}
                >
                  {String(item.value).padStart(2, "0")}
                </Box>
                <Typography sx={{ fontSize: "0.7rem", mt: 0.5 }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 🔥 Button */}
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              px: 5,
              py: 1.2,
              fontWeight: "bold",
              background: "#38a169",
              "&:hover": {
                background: "#2f855a",
                transform: "translateY(-2px)",
              },
              transition: "0.3s",
            }}
          >
            Discover Now
          </Button>
        </Box>

        {/* 🔥 Right Image */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "400px", sm: "350px", md: "420px", lg: "485px" },
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/images/pexels.jpg"
            alt="deal"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "0.5s",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DealSection;