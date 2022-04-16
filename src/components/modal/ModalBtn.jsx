import React, { useState } from 'react'
import './modal.scss'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ModalBtn = ({ params, handleDelete }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <button onClick={handleOpen} className='modalBtn'>
        Delete
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Are You Sure You Want To Delete This User?
          </Typography>

          <div className='btns'>
            <button onClick={handleClose} className='cancelBtn'>
              Cancel
            </button>
            <button
              onClick={() => handleDelete(params.id)}
              className='deleteBtn'
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalBtn
