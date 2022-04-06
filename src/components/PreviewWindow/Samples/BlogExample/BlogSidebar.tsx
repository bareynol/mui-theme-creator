import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { Archive, Social } from "./Blog";

interface Props {
  archives: Archive[];
  description: string;
  title: string;
  social: Social[]
}
export default function BlogSidebar({ archives, description, social, title }: Props) {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2 }}>
        <Tooltip title={`<Typography variant="h6">`} placement="left" arrow>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        </Tooltip>
        <Tooltip title={`<Typography variant="body1">`} placement="left" arrow>
          <Typography>{description}</Typography>
        </Tooltip>
      </Paper>
      <Tooltip title={`<Typography variant="h6">`} placement="left" arrow>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ mt: 3 }}
        >
          Archives
        </Typography>
      </Tooltip>
      {archives.map(archive => (
        <Tooltip
          key={archive.title}
          title={`<Link color="primary" variant="body1">`}
          placement="left"
          arrow
        >
          <Link display="block" variant="body1" href={archive.url} underline="hover">
            {archive.title}
          </Link>
        </Tooltip>
      ))}
      <Tooltip title={`<Typography variant="h6">`} placement="left" arrow>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ mt: 3 }}
        >
          Social
        </Typography>
      </Tooltip>
      {social.map((network: Social) => (
        <Tooltip
          key={network.name}
          title={`<Link color="primary" variant="body1">`}
          placement="left"
          arrow
        >
          <Link display="block" variant="body1" href="#" underline="hover">
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        </Tooltip>
      ))}
    </Grid>
  );
}
