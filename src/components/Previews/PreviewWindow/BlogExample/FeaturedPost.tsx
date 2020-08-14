import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"
import Tooltip from "@material-ui/core/Tooltip"

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
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
}
