import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Tooltip
        title={`<Typography color="primary" variant="h6">`}
        placement="left"
        arrow
      >
        <Typography variant="h6" color="primary" gutterBottom>
          Recent Deposits
        </Typography>
      </Tooltip>
      <Tooltip
        title={`<Typography color="textPrimary" variant="h4">`}
        placement="left"
        arrow
      >
        <Typography component="p" variant="h4">
          $3,024.00
        </Typography>
      </Tooltip>
      <Tooltip
        title={`<Typography color="textSecondary">`}
        placement="left"
        arrow
      >
        <Typography color="textSecondary" sx={{ flex: 1 }}>
          on 15 March, 2019
        </Typography>
      </Tooltip>
      <div>
        <Tooltip title={`<Link color="primary">`} placement="left" arrow>
          <Link color="primary" href="#" onClick={preventDefault} underline="hover">
            View balance
          </Link>
        </Tooltip>
      </div>
    </React.Fragment>
  );
}
