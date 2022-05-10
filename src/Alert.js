import { Modal } from "@mui/material";
import { useState } from "react";

const Alert = (message) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <p>{message}</p>
    </Modal>
  );
};

export default Alert
