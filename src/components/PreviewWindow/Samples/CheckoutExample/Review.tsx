import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" },
]
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
]
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
]

export default function Review() {
  return (
    <React.Fragment>
      <Tooltip
        title={`<Typography color="textPrimary" variant="h6">`}
        placement="left"
        arrow
      >
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
      </Tooltip>
      <List disablePadding>
        {products.map(product => (
          <ListItem sx={{ py: 1, px: 0 }} key={product.name}>
            <Tooltip title={`<ListItemText>`} placement="left" arrow>
              <ListItemText primary={product.name} secondary={product.desc} />
            </Tooltip>
            <Tooltip
              title={`<Typography color="textPrimary" variant="body2">`}
              placement="left"
              arrow
            >
              <Typography variant="body2">{product.price}</Typography>
            </Tooltip>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <Tooltip title={`<ListItemText>`} placement="left" arrow>
            <ListItemText primary="Total" />
          </Tooltip>
          <Tooltip
            title={`<Typography color="textPrimary" variant="subtitle1" style={{fontWeight: 700}}>`}
            placement="left"
            arrow
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              $34.06
            </Typography>
          </Tooltip>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Tooltip
            title={`<Typography color="textPrimary" variant="h6">`}
            placement="left"
            arrow
          >
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping
            </Typography>
          </Tooltip>
          <Tooltip
            title={`<Typography color="textPrimary" variant="body1">`}
            placement="left"
            arrow
          >
            <Typography gutterBottom>John Smith</Typography>
          </Tooltip>
          <Tooltip
            title={`<Typography color="textPrimary" variant="body1">`}
            placement="left"
            arrow
          >
            <Typography gutterBottom>{addresses.join(", ")}</Typography>
          </Tooltip>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Tooltip
            title={`<Typography color="textPrimary" variant="h6">`}
            placement="left"
            arrow
          >
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Payment details
            </Typography>
          </Tooltip>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Tooltip
                    title={`<Typography color="textPrimary" variant="body1">`}
                    placement="left"
                    arrow
                  >
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Tooltip>
                </Grid>
                <Grid item xs={6}>
                  <Tooltip
                    title={`<Typography color="textPrimary" variant="body1">`}
                    placement="left"
                    arrow
                  >
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Tooltip>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
