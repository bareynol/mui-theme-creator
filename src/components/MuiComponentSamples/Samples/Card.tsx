import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar, Box, CardHeader, CardMedia,
  Collapse, Grid, IconButton
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import React from "react";

export default function CardExample() {
  const bull = <Box component="span" sx={{
    display: "inline-block",
    m: "0 2px",
    transform: "scale(0.8)",
  }}>•</Box>
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h6">Simple</Typography>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: '12px' }} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
            <Button size="small" color="primary">
              Save
            </Button>
            <Button size="small" color="secondary">
              Dismiss
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="h6">Outlined</Typography>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: '12px' }} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
            <Button size="small" color="primary">
              Save
            </Button>
            <Button size="small" color="secondary">
              Dismiss
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="h6">Complex</Typography>
        <Card sx={{ minWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" sx={{ bgcolor: red[500] }}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" size="large">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            sx={{
              height: 0,
              pt: "56.25%", // 16:9
            }}
            image="https://material-ui.com/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" size="large">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" size="large">
              <ShareIcon />
            </IconButton>
            <IconButton
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                marginLeft: "auto",
                transition: (theme) => theme.transitions.create("transform", {
                  duration: theme.transitions.duration.shortest,
                }),
              }}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              size="large">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
}
