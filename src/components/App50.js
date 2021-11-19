import React from 'react';
import {Button} from '@material-ui/core';
import {DeleteIcon} from '@material-ui/core';
import {SendIcon} from '@material-ui/core';
import {Stack} from '@material-ui/core';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
