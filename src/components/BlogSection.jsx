import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Rise of Cloud Kitchens",
    desc: "Cloud kitchens are transforming food delivery with fast and convenient services.",
    image: "/blogs/b1.jpg",
  },
  {
    id: 2,
    title: "From Kitchen to Doorstep",
    desc: "We bring restaurant-quality meals straight to your home with care.",
    image: "/blogs/b2.jpg",
  },
  {
    id: 3,
    title: "Healthy & Affordable Meals",
    desc: "Eating healthy doesn’t have to be expensive anymore.",
    image: "/blogs/b3.jpg",
  },
  {
    id: 4,
    title: "Why Fresh Food Matters",
    desc: "Fresh ingredients make every meal more delicious and nutritious.",
    image: "/blogs/b4.jpg",
  },
  {
    id: 5,
    title: "Top 5 Street Foods",
    desc: "Explore the most loved street foods you must try today.",
    image: "/blogs/b5.jpg",
  },
  {
    id: 6,
    title: "Quick Snacks Ideas",
    desc: "Delicious snacks ready in minutes for your cravings.",
    image: "/blogs/b6.jpg",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: 6 }}>
      
      {/* 🔥 Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: "bold",
          mb: 1,
        }}
      >
        Our Blog Posts
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "gray",
          mb: 4,
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        Latest food stories & insights
      </Typography>

      {/* 🔥 Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 3,
        }}
      >
        {blogs.map((blog) => (
          <Box
            key={blog.id}
            sx={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={blog.image}
              alt={blog.title}
              sx={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <Box sx={{ p: 2 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                }}
              >
                {blog.title}
              </Typography>

              <Typography
                sx={{
                  color: "gray",
                  fontSize: "0.9rem",
                  mb: 2,
                }}
              >
                {blog.desc}
              </Typography>

              {/* 🔥 Read More */}
              <Button
                sx={{
                  color: "#38a169",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
                onClick={() => {
  navigate(`/blog?id=${blog.id}`);
  window.scrollTo(0, 0);
}}
              >
                Read More →
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlogSection;