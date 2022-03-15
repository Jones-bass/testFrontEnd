import React from 'react';
import Button from '@mui/material/Button';
import { ArrowDropDown } from '@mui/icons-material'; 
import { Add } from '@mui/icons-material'; 
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
    
      <Button variant="outlined" endIcon={<ArrowDropDown />}>TIPO </Button>
      <Button variant="contained" endIcon={<Add />}>CRIAR </Button>
    </Stack>
  );
}
