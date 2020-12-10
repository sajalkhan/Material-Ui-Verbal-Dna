import React, { useState } from "react";
import UseStyles from "../UseStyles";
import "../Verbal_DnA.css";
import VerbalDnACommonHeaderTable from "../PreFundingVerbal/VerbalDnACommonHeaderTable";
import PrintIcon from "@material-ui/icons/Print";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  IconButton,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

const applicationData = {
  Applicant_Name__c: "Terry Currier",
  Contract_Number__c: "C044925-A062144",
  contactName: "Terry Currier",
  TPR_Name: "Atlas Financial Services, LLC",
  Collateral: "2020 Power Line USA HD23",
  Dealer_Name: "Power Line U.S.A.",
};

const PreFundingGuarantorsTemplate = ({ GuarantorInfo }) => {
  const classes = UseStyles();
  // alert('Access',GuarantorInfo);
  const [understandEnglish, setUnderstandEnglish] = useState(" ");
  const [language, setLanguage] = useState("");
  const [show, setShow] = useState(false);
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  // useEffect(()=> {
  //     if(ACHData){
  //         setAccountCategory(ACHData.Account_Category);
  //         setAccountType(ACHData.Account_Type);
  //     }
  //  },[ACHData]);

  return (
    <Box className={classes.main_grid} p={4} bgcolor="background.paper">
      <Grid container className={classes.box_design}>
        <Grid item xs={4}></Grid>
        <Grid align="center" item xs={4}>
          <div align="center">
            <h3 align="center">Pre-Funding Verbal Guarantor</h3>
          </div>
        </Grid>

        <Grid item xs={4} align="right">
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <FormatAlignJustifyIcon
              fontSize="small"
              style={{
                backgroundColor: "#303F9F",
                color: "white",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </IconButton>

          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<PrintIcon />}
          >
            Print
          </Button>
        </Grid>

        <Grid item xs={12}>
          <VerbalDnACommonHeaderTable applicationData={applicationData} />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow className={classes.table_row_height}>
                  <TableCell className={classes.col_1}>
                    <Checkbox
                      checked={show}
                      onChange={() => setShow(!show)}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />{" "}
                    Borrower/Lessee same as Guarantor?
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {show === false ? (
          <Grid align="left" item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <h3>Introduction</h3>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.table_row_height}>
                    <TableCell className={classes.col_1} colSpan="2">
                      Introduce yourself and state that you are calling to
                      discuss their guarantee of the lease/loan financing of
                      <strong> Terry Currier </strong> prior to the funding the
                      transaction
                      <br /> Then state:
                      <strong>
                        &ldquo; Please note that this phone call will be
                        recorded for our records. &rdquo;
                      </strong>
                      <br /> Hit
                      <b> *9 </b> to commence recording
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ width: "80%" }}>
                      1) Do you speak/understand English?
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={
                          understandEnglish === " "
                            ? classes.buttonPrimary
                            : understandEnglish === "true"
                            ? classes.buttonPrimary
                            : classes.buttonInActive
                        }
                        onClick={() => setUnderstandEnglish("false")}
                        style={{ float: "right", marginLeft: "2px" }}
                      >
                        No
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{
                          marginRight: "2px",
                          float: "right",
                        }}
                        className={
                          understandEnglish === "true"
                            ? classes.buttonActive
                            : classes.buttonPrimary
                        }
                        onClick={() => setUnderstandEnglish("true")}
                      >
                        Yes
                      </Button>
                    </TableCell>
                  </TableRow>

                  {understandEnglish === "false" ? (
                    <TableRow>
                      <TableCell style={{ width: "65%", textAlign: "right" }}>
                        Choose Language
                      </TableCell>
                      <TableCell>
                        <Select
                          fullWidth
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={language}
                          onChange={handleLanguageChange}
                        >
                          <MenuItem value="Spanish">Spanish</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ) : null}

                  <TableRow>
                    <TableCell colSpan={2}>
                      2) Please provide the following information for me have
                      the customer provide this information to you in order to
                      confirm we have accurate information:
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow className={classes.table_row_height}>
                    <TableCell className={classes.col_1}></TableCell>
                    <TableCell className={classes.col_2}>
                      <p> Information in NG</p>
                    </TableCell>
                    <TableCell className={classes.col_3}>
                      <p>Provided by Customer</p>
                    </TableCell>
                    <TableCell className={classes.col_4}>
                      <p>Matches NG</p>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.table_row_height}>
                    <TableCell>
                      <p> Guarantor name</p>
                    </TableCell>
                    <TableCell>Terry Currier</TableCell>
                    <TableCell>
                      <TextField fullWidth id="standard-basic" />
                    </TableCell>
                    <TableCell
                      className={classes.table_content}
                      style={{ paddingTop: "20%" }}
                    >
                      <Button size="small" variant="contained" color="primary">
                        Yes
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        No
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.table_row_height}>
                    <TableCell>
                      <p>Business Address</p>
                      <i>(From Application)</i>
                    </TableCell>
                    <TableCell>
                      8751 Highway 38, Greensburg, LA, 70441
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        placeholder="Search Address.."
                      />
                      <TextField fullWidth id="standard-basic" />
                    </TableCell>
                    <TableCell
                      className={classes.table_content}
                      style={{ paddingTop: "20%", paddingBottom: "20%" }}
                    >
                      <Button size="small" variant="contained" color="primary">
                        Yes
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        No
                      </Button>
                    </TableCell>
                  </TableRow>

                  <TableRow className={classes.table_row_height}>
                    <TableCell>
                      <p>Home Address</p>
                      <i>(From Guarantor)</i>
                    </TableCell>
                    <TableCell>
                      8751 Highway 38, Greensburg, LA, 70441
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        placeholder="Search Address.."
                      />
                      <TextField fullWidth id="standard-basic" />
                    </TableCell>
                    <TableCell
                      className={classes.table_content}
                      style={{ paddingTop: "20%", paddingBottom: "20%" }}
                    >
                      <Button size="small" variant="contained" color="primary">
                        Yes
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        No
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.table_row_height}>
                    <TableCell>
                      <p>FEIN / Social Security Number</p>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <TextField id="date" fullWidth type="text" />
                    </TableCell>
                    <TableCell
                      className={classes.table_content}
                      style={{ paddingTop: "20%" }}
                    >
                      <Button size="small" variant="contained" color="primary">
                        Yes
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        No
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.table_row_height}>
                    <TableCell>
                      <p>Work Phone #</p>
                      <i>(From Application)</i>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <TextField id="date" fullWidth type="text" />
                    </TableCell>
                    <TableCell
                      className={classes.table_content}
                      style={{ paddingTop: "20%" }}
                    >
                      <Button size="small" variant="contained" color="primary">
                        Yes
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        No
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.table_row_height}>
                    <TableCell>
                      <p>Home Phone #</p>
                      <i>(From primary Guarantor)</i>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <TextField id="date" fullWidth type="text" />
                    </TableCell>
                    <TableCell
                      className={classes.table_content}
                      style={{ paddingTop: "20%" }}
                    >
                      <Button size="small" variant="contained" color="primary">
                        Yes
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        No
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.table_row_height}>
                    <TableCell>
                      <p>Email Address</p>
                      <i>(From Application)</i>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <TextField id="date" fullWidth type="text" />
                    </TableCell>
                    <TableCell
                      className={classes.table_content}
                      style={{ paddingTop: "20%" }}
                    >
                      <Button size="small" variant="contained" color="primary">
                        Yes
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        No
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      {" "}
                      Can you receive text messages on your cell phone?
                    </TableCell>
                    <TableCell width="20%">
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{ float: "right", marginLeft: "2px" }}
                      >
                        No
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{
                          marginRight: "2px",
                          float: "right",
                        }}
                      >
                        Yes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      {" "}
                      To what address should we send correspondence?
                    </TableCell>
                    <TableCell>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //  value={businessAddress}
                        //  onChange={handleBusinessAddress}
                      >
                        <MenuItem value="Business Address">
                          Business Address
                        </MenuItem>
                        <MenuItem value="Home Address">Home Address</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan="2">
                      Do you understand that you are guaranteeing{" "}
                      <b>Terry Currier’s </b> lease/loan transaction with us for
                      [describe truck/trailer]
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan="2" align="right">
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{ float: "right", marginLeft: "2px" }}
                      >
                        No
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{
                          marginRight: "2px",
                          float: "right",
                        }}
                      >
                        Yes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      {" "}
                      Do you confirm that you signed a guarantee with us of such
                      transaction?
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{ float: "right", marginLeft: "2px" }}
                      >
                        No
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{
                          marginRight: "2px",
                          float: "right",
                        }}
                      >
                        Yes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan="2">
                      Do you understand that, in the event that
                      <strong> Terry Currier’s </strong> fails to pay any
                      installments or perform any of their other obligations
                      under the transaction, you are responsible to pay or
                      perform those obligations and that we can then enforce
                      them against you?
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan="2" align="right">
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{ float: "right", marginLeft: "2px" }}
                      >
                        No
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{
                          marginRight: "2px",
                          float: "right",
                        }}
                      >
                        Yes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan="2">
                      Reaffirm the repayment terms---
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan="2">
                      You acknowledge that you are guaranteeing
                      <strong> Terry Currier’s </strong> financing of
                      <span className="highlight"> $18,396.00 </span> from us
                      <br /> To be paid over
                      <span className="highlight"> 60 </span> months with
                      monthly payments of
                      <span className="highlight"> $476.09 </span> [and, if a
                      lease, at the end of the lease term, a final payment of
                      <span className="highlight"> $0 </span>] and that the
                      monthly installments are payable on the
                      <Select
                        width="5%"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                      </Select>{" "}
                      th day of each month.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Your contract states, (section #17 for a Loan or #26 for a
                      Lease), that it is governed by the laws of the State of
                      California. Do you agree to the California governing law?
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{ float: "right", marginLeft: "2px" }}
                      >
                        No
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{
                          marginRight: "2px",
                          float: "right",
                        }}
                      >
                        Yes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <em>
                        Thank you for your time. If you need any additional
                        assistance, please feel free to contact a customer
                        service representative. Please take down the following
                        contact information for such customer service
                        representative:
                      </em>
                      <br />
                      <p>
                        Phone #:
                        <strong>
                          <em>1-800-998-7852</em>
                        </strong>
                      </p>
                      <p>
                        Email Address :
                        <strong>
                          <em>cservice@nmef.com</em>
                        </strong>
                      </p>
                      <br />
                      <br />
                      <strong>
                        Person who performed pre-funding verbal call:
                      </strong>
                      <br />
                      <br />

                      <TextField type="text" id="standard-basic" width="30%" />
                      <br />
                      <strong>
                        NMEF representative (Sign &amp; Print Name)
                      </strong>
                      <br />
                      <br />
                      <TextField type="date" id="standard-basic" width="30%" />
                      <br />
                      <strong>Date of call:</strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ textAlign: "right" }} colSpan="2">
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.button}
                        startIcon={<PrintIcon />}
                      >
                        Save
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};

export default PreFundingGuarantorsTemplate;
