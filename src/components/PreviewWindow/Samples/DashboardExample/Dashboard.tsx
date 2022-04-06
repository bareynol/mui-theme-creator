import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import React from "react";
import Chart from "./Chart";
import Deposits from "./Deposits";
import { mainListItems, secondaryListItems } from "./listItems";
import Orders from "./Orders";

const drawerWidth = 240

const paperStyle = {
  p: 2,
  display: "flex",
  overflow: "auto",
  flexDirection: "column",
};

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          open
          sx={{
            '& .MuiDrawer-paper': {
              position: "static",
              whiteSpace: "nowrap",
              width: drawerWidth,
              transition: (theme) => theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }
          }}
        >
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
      </Hidden>
      <Box sx={{
        flexGrow: 1,
        overflow: "auto",
      }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8}>
              <Paper sx={{
                ...paperStyle,
                height: 240,
              }}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4}>
              <Paper sx={{
                ...paperStyle,
                height: 240,
              }}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={paperStyle}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
