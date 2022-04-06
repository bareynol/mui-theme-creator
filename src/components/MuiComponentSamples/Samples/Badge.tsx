import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import React from "react";

export default function BadgeExample() {
  const [count, setCount] = React.useState(1)
  const [invisible, setInvisible] = React.useState(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      "& > *": {
        mb: 2,
      },
      "& > div > span": {
        mr: 4,
      },
    }}>
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
    </Box>
  )
}
