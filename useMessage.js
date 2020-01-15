import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Snackbar } from "@material-ui/core";
import { SnackbarWrapper } from "./snackBarWrapper";

function createNotification(props) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.style.position = "absolute";
  div.style.zIndex = 9999999999999999999;
  ReactDOM.render(
    <SnackBarRender open={true} {...props} />,
   div);
  setTimeout(() => {
    document.body.removeChild(div);
  }, 6000);
}

function SnackBarRender(props) {
  const { type, msg, duration } = props;
  const [isOpen, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={isOpen}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <SnackbarWrapper
        variant={type}
        message={msg}
        onClose={handleClose}
      />
    </Snackbar>
  );
}

export default function useMessage() {
  return function({ type, msg, duration }) {
    createNotification({ type, msg, duration });
  };
}
