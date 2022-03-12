import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/youtube';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MovieModal = ({ source, modalStatus, handleClose, mediaType }) => {
  return (
    <div>
      <Modal
        open={modalStatus}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          {mediaType === 'image' ? (
            <img src={source} height='400' width='500' />
          ) : (
            <ReactPlayer
              url={source}
              // light={`${pictures.baseUrl}${pictures.filenames[0]}`}
              light={true}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};
