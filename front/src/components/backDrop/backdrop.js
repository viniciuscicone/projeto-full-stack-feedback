import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function SimpleBackdrop(props) {

  return (
    <div>
      <Button startIcon={<SendIcon />} onClick={props.sendFunction}>{props.nameButton} </Button>
      <Backdrop
        // className={props.className}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        opacity='0.5'
        open={props.open}

        onClick={props.handleClose}
      >
        <CircularProgress color="inherit" opacity='0.5' />  Enviando..
      </Backdrop>
    </div>
  );
}