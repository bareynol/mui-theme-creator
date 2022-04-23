import GitHubIcon from "@mui/icons-material/GitHub"
import {
  AppBar,
  AppBarProps,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material"
import React from "react"
import muiVersion from "src/muiVersion"
import TutorialButton from "./Tutorial/TutorialButton"

const Header = (props: AppBarProps) => {
  return (
    <AppBar position="static" color="default" {...props}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h6"
            sx={{ typography: "h6", lineHeight: "1.25rem" }}
          >
            MUI Theme Creator
          </Typography>
          <Typography
            variant="caption"
            sx={{ typography: "caption", fontWeight: 700 }}
          >
            {"└─ "}
            <Link
              href="https://mui.com/"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              {`@mui/material@${muiVersion}`}
            </Link>
          </Typography>
        </div>
        <div>
          <TutorialButton />
          <IconButton
            href="https://github.com/Zenoo/mui-theme-creator"
            target="_blank"
            rel="noreferrer"
            size="large"
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
