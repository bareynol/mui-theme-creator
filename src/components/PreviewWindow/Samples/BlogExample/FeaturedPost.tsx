import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { Post } from "./Blog";

interface Props {
  post: Post;
}
export default function FeaturedPost({ post }: Props) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <CardContent>
              <Tooltip
                title={`<Typography variant="h5">`}
                placement="left"
                arrow
              >
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
              </Tooltip>
              <Tooltip
                title={`<Typography color="textSecondary" variant="subtitle1">`}
                placement="left"
                arrow
              >
                <Typography variant="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
              </Tooltip>
              <Tooltip
                title={`<Typography variant="subtitle1">`}
                placement="left"
                arrow
              >
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
              </Tooltip>
              <Tooltip
                title={`<Typography color="primary" variant="subtitle1">`}
                placement="left"
                arrow
              >
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </Tooltip>
            </CardContent>
          </Box>
          <Hidden smDown>
            <CardMedia
              sx={{ width: 160 }}
              image={post.image}
              title={post.imageText}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
