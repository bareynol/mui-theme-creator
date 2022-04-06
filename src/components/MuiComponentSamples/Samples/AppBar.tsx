import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  onDrawerButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function AppBarExample({ onDrawerButtonClick }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<Element | null>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLAnchorElement | HTMLLIElement | HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit" size="large">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit" size="large">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          size="large">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tooltip title={`<AppBar color="primary">`} placement="left" arrow>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ mr: 2 }}
              color="inherit"
              aria-label="open drawer"
              onClick={onDrawerButtonClick}
              size="large">
              <MenuIcon />
            </IconButton>
            <Typography sx={{
              display: { xs: "none", sm: "block" },
            }} variant="h6">
              Material-UI
            </Typography>
            <Box sx={{
              position: "relative",
              borderRadius: 1,
              backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25),
              },
              mr: 2,
              ml: {
                xs: 0,
                sm: 3,
              },
              width: {
                xs: 1,
                sm: "auto",
              },
            }}>
              <Box sx={{
                py: 0,
                px: 2,
                height: 1,
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                sx={{
                  color: "inherit",
                  '& .MuiInputBase-input': {
                    py: 1,
                    pr: 1,
                    pl: (theme) => `calc(1em + ${theme.spacing(4)})`,
                    transition: (theme) => theme.transitions.create("width"),
                    width: {
                      xs: 1,
                      md: '20ch'
                    },
                  }
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{
              display: { xs: "none", md: "flex" },
            }}>
              <IconButton aria-label="show 4 new mails" color="inherit" size="large">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit" size="large">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                size="large">
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{
              display: { xs: "flex", md: "none" },
            }}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                size="large">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Tooltip>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
