import React from 'react'
import { Typography, Box } from '@mui/material'
import Copyright from './CopyRight';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      For You
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      With lots of Love💙
    </Typography>
    <Copyright />
  </Box>
  )
}
