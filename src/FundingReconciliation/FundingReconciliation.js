import React, { useState, useEffect, createRef } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import UseStyles from "../Summary/UseStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Tab } from "@material-ui/core";

export default function PurchasePrice() {
  const classes = UseStyles();
  return (
    <Box className={classes.main_grid} p={4} bgcolor="background.paper">
      <Grid container spacing={3}>
        <Grid align="center" item xs={12}>
          <Typography variant="h6">NMEF Funding Worksheet</Typography>
        </Grid>

        <Grid item xs={6}>
          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
              background: "linear-gradient(90deg, #F9EBEA, #D7DBDD)",
            }}
          >
            <Table className="fundingDetails">
              <TableBody>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">App #</TableCell>
                  <TableCell align="left">A-063658</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">Structure</TableCell>
                  <TableCell align="left">Loan</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">Program</TableCell>
                  <TableCell align="left">Broker</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">Borrower</TableCell>
                  <TableCell align="left">
                    Adult Medicine Of Lake County, INC
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={6}>
          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
              background: "linear-gradient(90deg, #F9EBEA, #D7DBDD)",
            }}
          >
            <Table className="brokerDetails">
              <TableBody>
                <TableCell colSpan={2} align="center">
                  Broker Information
                </TableCell>
                <TableRow>
                  <TableCell>Broker</TableCell>
                  <TableCell>MMP Capital Inc.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dealer Fee %</TableCell>
                  <TableCell>4.04%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dealer Fee & Due</TableCell>
                  <TableCell>$7,753.57</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid align="center" item xs={6}>
          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
              background: "linear-gradient(90deg, #F9EBEA, #D7DBDD)",
            }}
          >
            <Table className="vendorDetails">
              <TableBody>
                <TableCell colSpan={2} align="center">
                  Vendor/Dealer Information
                </TableCell>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Vendor
                  </TableCell>
                  <TableCell style={{ width: "30%" }} align="left">
                    Cynosure
                  </TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Gross Invoice Amount
                  </TableCell>
                  <TableCell align="left">$215,605.00</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Down Payment
                  </TableCell>
                  <TableCell align="left">$23,685.00</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Trade In/Pledge Amount
                  </TableCell>
                  <TableCell align="left">$0.00</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Net Vendor Invoice
                  </TableCell>
                  <TableCell align="left">$191,920.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
              background: "linear-gradient(90deg, #F9EBEA, #D7DBDD)",
            }}
          >
            <Table className="purchaseDetails">
              <TableHead className="tableHead">
                <TableRow>
                  <TableCell align="left">Condition</TableCell>
                  <TableCell align="left">Year</TableCell>
                  <TableCell align="left">Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>New</TableCell>
                  <TableCell>2020</TableCell>
                  <TableCell>Medical Imaging</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
              background: "linear-gradient(90deg, #F9EBEA, #D7DBDD)",
            }}
          >
            <Table className="vendorDetails">
              <TableBody>
                <TableCell colSpan={4} align="center">
                  Customer Cash Information
                </TableCell>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Upfront Payment
                  </TableCell>
                  <TableCell style={{ width: "30%" }} align="left">
                    $0.00
                  </TableCell>
                  <TableCell>Total Due to NMEF</TableCell>
                  <TableCell>$100.00</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Doc and Inspection Fee
                  </TableCell>
                  <TableCell align="left">$100.00</TableCell>
                  <TableCell>Down Payment</TableCell>
                  <TableCell>$23,685.00</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Interim Payment
                  </TableCell>
                  <TableCell align="left">$0.00</TableCell>
                  <TableCell style={{ width: "30%" }} align="left">
                    Trade In/Pledge Amount
                  </TableCell>
                  <TableCell align="left">$0.00</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Total Due to NMEF
                  </TableCell>
                  <TableCell align="left">$100.00</TableCell>
                  <TableCell style={{ width: "30%" }} align="left">
                    Total Customer Due at Signing:
                  </TableCell>
                  <TableCell align="left">$23,785.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
              background: "linear-gradient(90deg, #F9EBEA, #D7DBDD)",
            }}
          >
            <Table className="fundingReconciliation">
              <TableBody>
                <TableCell colSpan={2} align="center">
                  Funding Reconciliation
                </TableCell>
                <TableRow>
                  <TableCell>Gross Invoice Amount</TableCell>
                  <TableCell>$215,605.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Trade In/Pledge Amount</TableCell>
                  <TableCell>$0.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Due to NMEF</TableCell>
                  <TableCell>$0.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Net Due To Vendor</TableCell>
                  <TableCell>$215,605.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Was Down Payment Received by Vendor?"
                      labelPlacement="start"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Was the Total Due to NMEF Recieved by the Vendor?"
                      labelPlacement="start"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
