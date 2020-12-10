import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import EditIcon from "@material-ui/icons/Edit";
import { SpaOutlined } from "@material-ui/icons";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import UseStyles from "../Summary/UseStyles";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const DataList = [
  {
    Satisfied: "No",
    Related_Party: "Crazy J'S Concrete, INC.",
    Type:
      "GPS Tracking Device - Documentation, funding and closing of this transaction are contingent upon executed agreement from customer authorizing installation and use of GPS tracking device on equipment and upon written verification of installation of GPS tracking device. If either the dealer or customer do not agree with these conditions, the approval is deemed cancelled.",
    Court: "",
    Creditor: "",
    Amount: "",
    Notes: "",
    Evidence: "",
  },
  {
    Satisfied: "Yes",
    Related_Party: "Crazy J'S Concrete, INC.",
    Type:
      "GPS Tracking Device - Documentation, funding and closing of this transaction are contingent upon executed agreement from customer authorizing installation and use of GPS tracking device on equipment and upon written verification of installation of GPS tracking device. If either the dealer or customer do not agree with these conditions, the approval is deemed cancelled.",
    Court: "",
    Creditor: "",
    Amount: "",
    Notes: "",
    Evidence: "",
  },
];

const StipulationSatisfaction = () => {
  const classes = UseStyles();
  const [openModal, setOpenModal] = useState(false);
  const [evidenceState, setEvidenceState] = useState("Add Evidence");

  return (
    <Box className={classes.main_grid} p={4} bgcolor="background.paper">
      <Grid container className={classes.box_design}>
        <Grid className={classes.grid_space} align="center" item xs={12}>
          <TableContainer component={Paper}>
            <Table className="uniqueName" aria-label="simple table">
              <TableHead className="tableHead">
                <TableRow>
                  <TableCell className={classes.header_bold} align="center">
                    Satisfied
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Related Party
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Type
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Court
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Creditor
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Amount
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Notes
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Evidence
                  </TableCell>
                  <TableCell className={classes.header_bold} align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DataList.map((row, i) => (
                  <TableRow
                    className={
                      row.Satisfied === "No" ? classes.pink : classes.green
                    }
                    key={i}
                  >
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="center"
                    >
                      {row.Satisfied}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Related_Party}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Type}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Court}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Creditor}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Amount}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Notes}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Evidence}
                    </TableCell>
                    <TableCell
                      className={
                        row.Selected_for_Proposal__c
                          ? classes.text_color_set
                          : null
                      }
                      align="left"
                    >
                      {row.Satisfied === "No" ? (
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "red", color: "white" }}
                          onClick={() => setOpenModal(true)}
                        >
                          Open
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#53CD37", color: "white" }}
                        >
                          Satisfied
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Modal
            className={classes.modal}
            open={openModal}
            onClose={() => setOpenModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openModal}>
              <div className={classes.paper}>
                <div className={classes.modalContent}>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    Satisfy Prompt
                  </Typography>
                  <TextField
                    fullWidth
                    id="notes"
                    label="Notes"
                    multiline
                    rows={4}
                    variant="outlined"
                    className={classes.verticalGap}
                  />
                  <div className={classes.buttonGroup}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="uploadEvidence"
                      multiple
                      type="file"
                      onChange={(e) => {
                        if (e.target.value.length > 0) {
                          setEvidenceState("Evidence Added");
                          let fileReader = new FileReader();
                          let file = null;
                          let attachObj = {};
                          fileReader.onload = async (fileLoadedEvent) => {
                            file = fileLoadedEvent.target.result;
                            console.log(file);
                            attachObj = {
                              ...attachObj,
                              fileContent: file,
                            };
                            console.log(attachObj);
                            //make api call
                          };
                          fileReader.readAsDataURL(e.target.files[0]);
                          //attachObj = {};
                          console.log(attachObj);
                        } else {
                          setEvidenceState("Add Evidence");
                          e.target.value = null;
                        }
                      }}
                    />
                    <label htmlFor="uploadEvidence">
                      <Button
                        variant="contained"
                        component="span"
                        style={{ backgroundColor: "#53CD37", color: "white" }}
                      >
                        {evidenceState}
                      </Button>
                    </label>
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StipulationSatisfaction;
