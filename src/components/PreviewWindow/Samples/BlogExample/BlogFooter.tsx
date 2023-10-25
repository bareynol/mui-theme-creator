import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

function Copyright() {
  return (
    <Tooltip title={`<Typography variant="body2" color="textSecondary">`} arrow>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/" underline="hover">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Tooltip>
  );
}

interface Props {
  description: string;
  title: string;
}
export default function BlogFooter({ description, title }: Props) {
  return (
    <Box component="footer" sx={{
      bgcolor: 'background.paper',
      py: 6,
      px: 0,
    }}>
      <Container maxWidth="lg">
        <Tooltip title={`<Typography variant="h6">`} arrow>
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textSecondary" variant="subtitle1">`}
          arrow
        >
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </Tooltip>
        <Copyright />
      </Container>
    </Box>
  )
}
