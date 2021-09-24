import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DesignButton from './DesignButton';
import Message from './Message';
export default function Height() {
  return (
    <Grid container>
      <Box
        sx={{
          boxShadow: 1,
          bgcolor: 'background.paper',
          m: 1,
          p: 1,
          width: '100%',
          height: '100%',
        }}
      >
        <Grid container>
      <Box
        sx={{
          boxShadow: 1,
          bgcolor: 'background.paper',
          m: 1,
          p: 1,
          width: '100%',
          height: '15rem',
        }}
      >
        
       <DesignButton/>
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          bgcolor: 'background.paper',
          m: 1,
          p: 1,
          width: '100%',
          height: '15rem',
        }}
      >
        <Message/>
      </Box>
      </Grid>
      </Box>
    </Grid>
  );
}