import React from "react"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Badge from "@mui/material/Badge"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import MailIcon from "@mui/icons-material/Mail"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& > div > span": {
        marginRight: theme.spacing(4),
      },
    },
  })
)

export default function BadgeExample() {
  const classes = useStyles()
  const [count, setCount] = React.useState(1)
  const [invisible, setInvisible] = React.useState(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <div className={classes.root}>
      <div>
        <Badge color="primary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <Badge color="error" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0))
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge color="primary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <Badge color="error" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={!invisible}
              onChange={handleBadgeVisibility}
            />
          }
          label="Show Badge"
        />
      </div>
    </div>
  )
}
