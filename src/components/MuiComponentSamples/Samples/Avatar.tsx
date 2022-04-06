import AssignmentIcon from "@mui/icons-material/Assignment";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from '@mui/material/AvatarGroup';
import { deepOrange, deepPurple, green, pink } from "@mui/material/colors";
import React from "react";

const avatarSetStyle = {
  display: "flex",
  m: 2,
  "& > *": {
    m: 1,
  },
};

export default function AvatarExample() {

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
    }}>
      <Box sx={avatarSetStyle}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
      </Box>
      <Box sx={avatarSetStyle}>
        <Avatar>H</Avatar>
        <Avatar sx={{
          color: (theme) => theme.palette.getContrastText(deepOrange[500]),
          bgcolor: deepOrange[500],
        }}>N</Avatar>
        <Avatar sx={{
          color: (theme) => theme.palette.getContrastText(deepPurple[500]),
          bgcolor: deepPurple[500],
        }}>OP</Avatar>
      </Box>
      <Box sx={avatarSetStyle}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          sx={{
            width: (theme) => theme.spacing(3),
            height: (theme) => theme.spacing(3),
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          sx={{
            width: (theme) => theme.spacing(7),
            height: (theme) => theme.spacing(7),
          }}
        />
      </Box>
      <Box sx={avatarSetStyle}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{
          color: (theme) => theme.palette.getContrastText(pink[500]),
          bgcolor: pink[500],
        }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{
          color: "#fff",
          bgcolor: green[500],
        }}>
          <AssignmentIcon />
        </Avatar>
      </Box>
      <Box sx={avatarSetStyle}>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  )
}
