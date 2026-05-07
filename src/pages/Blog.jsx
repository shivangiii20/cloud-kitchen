import { useSearchParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { blogData } from "../data/blogData";

const Blog = () => {
  const [searchParams] = useSearchParams();
const id = searchParams.get("id");
  const navigate = useNavigate();

  const selectedBlog = blogData.find(
    (item) => item.id === Number(id)
  );

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: 6 }}>

      {/* 🔥 Show full blog only if ID exists */}
      {id && selectedBlog && (
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            {selectedBlog.title}
          </Typography>

          <Box
            component="img"
            src={selectedBlog.image}
            alt={selectedBlog.title}
            sx={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <Typography sx={{ mt: 3, color: "#555" }}>
            {selectedBlog.content}
          </Typography>
        </Box>
      )}

      {/* 🔥 Always show blog list */}
      <Typography
        sx={{
          fontSize: { xs: "1.4rem", sm: "1.8rem" },
          fontWeight: "bold",
          mb: 3,
        }}
      >
        All Blog Posts
      </Typography>

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
        {blogData.map((blog) => (
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

            <Box sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: "bold", mb: 1 }}>
                {blog.title}
              </Typography>

              <Typography sx={{ color: "gray", fontSize: "0.9rem", mb: 2 }}>
                {blog.content.slice(0, 80)}...
              </Typography>

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

export default Blog;