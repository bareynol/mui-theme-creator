import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { Post } from "./Blog";

interface Props {
  post: Post
}
export default function MainFeaturedPost({ post }: Props) {
  return (
    <Paper
      sx={{
        position: "relative",
        bgcolor: (theme) => theme.palette.grey[800],
        color: 'common.white',
        mb: 4,
        backgroundImage: `url(${post.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        bgcolor: "rgba(0,0,0,.3)",
      }} />
      <Grid container>
        <Grid item md={6}>
          <Box sx={{
            position: "relative",
            p: {
              xs: 3,
              md: 6,
            },
            pr: {
              xs: 3,
              md: 0,
            }
          }}>
            <Tooltip
              title={`<Typography color="textPrimary" variant="h3">`}
              placement="left"
              arrow
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
            </Tooltip>
            <Tooltip
              title={`<Typography color="textPrimary" variant="h5">`}
              placement="left"
              arrow
            >
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
            </Tooltip>
            <Tooltip
              title={`<Link color="primary" variant="subtitle1">`}
              placement="left"
              arrow
            >
              <Link variant="subtitle1" href="#" underline="hover">
                {post.linkText}
              </Link>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}