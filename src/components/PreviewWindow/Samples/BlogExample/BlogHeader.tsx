import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { Section } from "./Blog";

interface Props {
  sections: Section[],
  title: string,
}
export default function BlogHeader({ sections, title }: Props) {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderBottomColor: 'divider', }}>
        <Tooltip title={`<Button color="default" size="small">`} arrow>
          <Button size="small">Subscribe</Button>
        </Tooltip>
        <Tooltip title={`<Typography color="inherit" variant="h5">`} arrow>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
        </Tooltip>
        <Tooltip title={`<IconButton color="default">`} arrow>
          <IconButton size="large">
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={`<Button color="default" variant="outlined" size="small">`}
          arrow
        >
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Tooltip>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
        }}
      >
        {sections.map(section => (
          <Tooltip
            title={`<Link color="inherit" variant="body2">`}
            arrow
            key={section.title}
          >
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href={section.url}
              sx={{
                p: 1,
                flexShrink: 0,
              }}
              underline="hover">
              {section.title}
            </Link>
          </Tooltip>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
