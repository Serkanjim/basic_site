import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {  } from '@mui/material';
import { Height } from '@mui/icons-material';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={{ backgroundColor: "white",width:"100px", padding: "10px" }} component="nav" aria-label="Close">
      
      <ListItemButton>
        <ListItemText primary="Item1" />
      </ListItemButton>
      <Divider light />
      <ListItemButton>
        <ListItemText primary="Item2" />
      </ListItemButton>
      <Divider light />
      <ListItemButton>
        <ListItemText primary="Item3" />
      </ListItemButton>
      <Divider light />
      <ListItemButton >
        <ListItemText primary="Item4" />
      </ListItemButton>
      <Divider light />
      <ListItemButton >
        <ListItemText primary="Item5" />
      </ListItemButton>
      <Divider light />
      <ListItemButton >
        <ListItemText primary="Item6" />
      </ListItemButton>
      <Divider light />
      <ListItemButton >
        <ListItemText primary="Item7" />
      </ListItemButton>
      <Divider light />
      <ListItemButton >
        <ListItemText primary="Item8" />
      </ListItemButton>
      
      
      
    </List>
  );
}