import React from "react"
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { green } from "@mui/material/colors"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > svg": {
        margin: theme.spacing(2),
      },
    },
  })
)

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

export default function IconExample() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon style={{ color: green[500] }} />
    </div>
  )
}
