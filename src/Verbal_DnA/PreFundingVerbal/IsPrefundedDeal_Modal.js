import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ openModal, selectedOption }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(openModal);
    return () => {};
  }, [openModal]);

  return (
    <Dialog maxWidth="sm" open={open}>
      <DialogTitle id="alert-dialog-title">
        <span style={{ color: "#F8C471", textAlign: "center" }}>
          Attention!
        </span>
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Is this 100% Pre Funded Deal?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          color="secondary"
          onClick={() => {
            setOpen(false);
            selectedOption(false);
          }}
        >
          No
        </Button>

        <Button
          color="primary"
          autoFocus
          onClick={() => {
            setOpen(false);
            selectedOption(true);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
