import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Box } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import Container from "@mui/material/Container"
import FormControlLabel from "@mui/material/FormControlLabel"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import React from "react"

export default function SignUpExample() {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <Tooltip title={`<Avatar> color="secondary"`} arrow>
          <Avatar sx={{
            m: 1,
            bgcolor: 'secondary.main',
          }}>
            <LockOutlinedIcon />
          </Avatar>
        </Tooltip>
        <Tooltip title={`<Typography color="textPrimary" variant="h5">`} arrow>
          <Typography variant="h5">Sign up</Typography>
        </Tooltip>
        <Box component="form" sx={{
          width: 1, // Fix IE 11 issue.
          mt: 3,
        }} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Tooltip title={`<Checkbox color="primary">`} arrow>
                    <Checkbox value="allowExtraEmails" color="primary" />
                  </Tooltip>
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Tooltip title={`<Button color="primary" variant="contained">`} arrow>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mx: 0, mb: 2 }}
            >
              Sign Up
            </Button>
          </Tooltip>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Tooltip title={`<Link color="primary" variant="body2">`} arrow>
                <Link href="#" variant="body2" underline="hover">
                  Already have an account? Sign in
                </Link>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
