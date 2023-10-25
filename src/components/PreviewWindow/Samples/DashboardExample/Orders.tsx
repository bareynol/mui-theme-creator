import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

// Generate Order Data
function createData(
  id: number, date: string,
  name: string, shipTo: string,
  paymentMethod: string, amount: number) {
  return { id, date, name, shipTo, paymentMethod, amount }
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
]

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Orders() {
  return (
    <React.Fragment>
      <Tooltip
        title={`<Typography color="primary" variant="h6">`}
        placement="left"
        arrow
      >
        <Typography variant="h6" color="primary" gutterBottom>
          Recent Orders
        </Typography>
      </Tooltip>
      <Tooltip title={`<Table>`} placement="top" arrow>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Tooltip>
      <Box sx={{ mt: 3 }}>
        <Tooltip title={`<Link color="primary">`} placement="left" arrow>
          <Link color="primary" href="#" onClick={preventDefault} underline="hover">
            See more orders
          </Link>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}
