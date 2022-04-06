import React from "react"
import PropTypes from "prop-types"
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Hidden from "@mui/material/Hidden"
import Tooltip from "@mui/material/Tooltip"

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

export default function FeaturedPost(props) {
  const classes = useStyles()
  const { post } = props

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
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
          </div>
          <Hidden smDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
}
