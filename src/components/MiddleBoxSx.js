import * as React from 'react';
import Box from '@mui/material/Box';

export default function MiddleBoxSx() {
  return (
    <div><Box
    sx={{
      width: 100,
      height: 50,
      display: 'block',
      paddingRight: 15,
      marginright: 15,
      outlineStyle: "groove",
      backgroundColor: 'red',
      '&:hover': {
        backgroundColor: 'white',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  /></div>
    
  );
}


