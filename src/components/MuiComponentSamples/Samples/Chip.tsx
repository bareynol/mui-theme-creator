import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import FaceIcon from "@material-ui/icons/Face"
import DoneIcon from "@material-ui/icons/Done"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
)

export default function ChipExample() {
  const classes = useStyles()

  const handleDelete = () => {
    console.info("You clicked the delete icon.")
  }

  const handleClick = () => {
    console.info("You clicked the Chip.")
  }

  return (
    <>
      <Typography variant="h6">Default</Typography>
      <div className={classes.root}>
        <Chip label="Basic" />
        <Chip label="Disabled" disabled />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Clickable"
          onClick={handleClick}
        />
        <Chip
          avatar={
            <Avatar
              alt="Natacha"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          }
          label="Deletable"
          onDelete={handleDelete}
        />
        <Chip
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip label="Clickable Link" component="a" href="#chip" clickable />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          icon={<FaceIcon />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
        />
        <Chip
          icon={<FaceIcon />}
          label="Deletable secondary"
          onDelete={handleDelete}
          color="secondary"
        />
      </div>

      <Typography variant="h6">Outlined</Typography>
      <div className={classes.root}>
        <Chip variant="outlined" label="Basic" />
        <Chip variant="outlined" label="Disabled" disabled />
        <Chip
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          label="Clickable"
          onClick={handleClick}
        />
        <Chip
          variant="outlined"
          avatar={
            <Avatar
              alt="Natacha"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          }
          label="Deletable"
          onDelete={handleDelete}
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          variant="outlined"
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          label="Clickable Link"
          component="a"
          href="#chip-outlined"
          clickable
        />
        <Chip
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Deletable secondary"
          onDelete={handleDelete}
          color="secondary"
        />
      </div>
    </>
  )
}
