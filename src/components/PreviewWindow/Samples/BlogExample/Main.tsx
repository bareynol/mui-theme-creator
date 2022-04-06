import { Box, Link, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  title: string;
}
export default function Main({ title }: Props) {
  return (
    <Grid item xs={12} md={8}>
      <Tooltip
        title={`<Typography color="textPrimary" variant="h6">`}
        placement="left"
        arrow
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      </Tooltip>
      <Divider />
      <Box sx={{
        typography: 'body2',
        py: 3,
        px: 0
      }}>
        <Tooltip
          title={`<Typography color="textPrimary" variant="h5">`}
          placement="left"
          arrow
        >
          <Typography variant="h5">Sample blog post</Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography>
            April 1, 2020 by{" "}
            <Tooltip title={`<Link color="primary" variant="body1">`} arrow>
              <Link href="#" underline="hover">[Olivier]</Link>
            </Tooltip>
          </Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
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
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography>Heading</Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography paragraph>
            {`Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.`}
          </Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography>Sub-heading</Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography paragraph>
            {`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`}
          </Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography>Sub-heading</Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography paragraph>
            {`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta
            sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus.`}
          </Typography>
        </Tooltip>
        <ul>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <Tooltip
          title={`<Typography color="textPrimary" variant="body1">`}
          placement="left"
          arrow
        >
          <Typography paragraph>
            {`Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`}
          </Typography>
        </Tooltip>
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
      </Box>
    </Grid>
  );
}
