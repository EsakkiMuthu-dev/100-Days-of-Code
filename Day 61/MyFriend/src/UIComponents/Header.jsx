import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
export default function Header() {
  return (
    <AppBar position="relative">
    <Toolbar>
      <CameraIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap>
        For You
      </Typography>
    </Toolbar>
    </AppBar>
  )
}
