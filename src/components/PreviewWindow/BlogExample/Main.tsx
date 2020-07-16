import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { Link } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}))

const posts = [<></>]

export default function Main(props) {
  const classes = useStyles()
  const { posts, title } = props

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <div className={classes.markdown}>
        <Typography variant="h5">Sample blog post</Typography>
        <Typography>
          April 1, 2020 by <Link href="#">[Olivier]</Link>
        </Typography>
        <Typography paragraph>
          {`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
            consectetur purus sit amet fermentum.
            
            Curabitur blandit tempus porttitor.
            **Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor
            id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna
            mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean
            lacinia bibendum nulla sed consectetur.`}
        </Typography>
        <Typography>Heading</Typography>
        <Typography paragraph>
          {`Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.`}
        </Typography>
        <Typography>Sub-heading</Typography>
        <Typography paragraph>
          {`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`}
        </Typography>
        <Typography>Sub-heading</Typography>
        <Typography paragraph>
          {`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta
            sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus.`}
        </Typography>
        <ul>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <Typography paragraph>
          {`Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`}
        </Typography>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </li>
          <li>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </li>
        </ol>
      </div>
    </Grid>
  )
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}
