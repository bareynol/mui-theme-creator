import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import React from "react";

export default function FabExample() {

  return (
    <div>
      <Fab color="primary" aria-label="add" sx={{ m: 1 }}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" sx={{ m: 1 }}>
        <EditIcon />
      </Fab>
      <Fab variant="extended" sx={{ m: 1 }}>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like" sx={{ m: 1 }}>
        <FavoriteIcon />
      </Fab>
    </div>
  )
}
