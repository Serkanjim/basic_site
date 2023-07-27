import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <div><Box
    sx={{
      width: 100,
      height: 50,
      display: 'block',
      padding: 3,
      outlineStyle: "groove",
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
    
  />
  </div>
    
  );
}


