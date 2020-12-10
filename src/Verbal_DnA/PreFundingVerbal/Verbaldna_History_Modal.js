import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  Table,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AlertDialog({ openModal, closeHistoryModal }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(openModal);
    return () => {};
  }, [openModal]);

  const classes = useStyles();

  return (
    <Dialog
      fullWidth="true"
      maxWidth="md"
      open={open}
      onClose={(() => handleClose, closeHistoryModal)}
    >
      <DialogTitle id="alert-dialog-title" onClose={handleClose}>
        <span style={{ color: "#F8C471", textAlign: "center" }}>
          PreFunding Verbal History
        </span>
      </DialogTitle>

      <DialogContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Activity Event</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">User</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>Update</TableCell>
                <TableCell>Changed Speak English from null to Yes</TableCell>
                <TableCell>09/30/2020 1:47:27 AM</TableCell>
                <TableCell>Susan Tartaglia</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}
