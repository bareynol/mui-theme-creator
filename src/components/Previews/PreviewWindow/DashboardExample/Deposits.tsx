import React from "react"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

export default function Deposits() {
  const classes = useStyles()
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
        <Typography color="textSecondary" className={classes.depositContext}>
          on 15 March, 2019
        </Typography>
      </Tooltip>
      <div>
        <Tooltip title={`<Link color="primary">`} placement="left" arrow>
          <Link color="primary" href="#" onClick={preventDefault}>
            View balance
          </Link>
        </Tooltip>
      </div>
    </React.Fragment>
  )
}
