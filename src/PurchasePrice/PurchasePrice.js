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
import UseStyles from "../Summary/UseStyles";
import { Typography } from "@material-ui/core";
import { MyDocument } from "../PurchasePrice/PurchasePriceDoc";
import Pdf from "react-to-pdf";

const ref = createRef();

export default function PurchasePrice() {
  const classes = UseStyles();
  return (
    <Box
      ref={ref}
      className={classes.main_grid}
      p={4}
      bgcolor="background.paper"
    >
      <Grid container className={classes.box_design}>
        <Grid align="left" item xs={4}>
          <TableContainer component={Paper}>
            <Table className="purchasePrice">
              <TableBody>
                <TableRow className={classes.row_color1}>
                  <TableCell style={{ width: "30%" }} align="left">
                    Purchase Date
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      size="small"
                      style={{ width: "80%" }}
                      variant="outlined"
                      id="purchaseDate"
                      type="date"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.row_color2}>
                  <TableCell align="left">First Payment Date</TableCell>
                  <TableCell align="left">
                    <TextField
                      size="small"
                      style={{ width: "80%" }}
                      variant="outlined"
                      id="firstPaymentDate"
                      type="date"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">Days Until Payment Date</TableCell>
                  <TableCell align="left">{"0"} Days</TableCell>
                </TableRow>
                <TableRow className={classes.row_color2}>
                  <TableCell align="left">Terms</TableCell>
                  <TableCell align="left">
                    <TextField
                      size="small"
                      style={{ width: "40%", backgroundColor: "white" }}
                      variant="outlined"
                      id="terms"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">Rate %</TableCell>
                  <TableCell align="left">
                    <TextField
                      size="small"
                      style={{ width: "40%" }}
                      variant="outlined"
                      id="terms"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.row_color2}>
                  <TableCell align="left">Purchase Price</TableCell>
                  <TableCell align="left">$</TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">Interim Interest</TableCell>
                  <TableCell align="left">$</TableCell>
                </TableRow>
                <TableRow className={classes.row_color2}>
                  <TableCell align="left">North Mill Doc Fee</TableCell>
                  <TableCell align="left">
                    <TextField
                      size="small"
                      style={{ width: "60%", backgroundColor: "white" }}
                      variant="outlined"
                      id="terms"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.row_color1}>
                  <TableCell align="left">
                    <Typography variant="h6">Net Purchase Price</Typography>
                  </TableCell>
                  <TableCell align="left">$</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid align="left" xs={3}>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.verticalGap}
          >
            <Typography style={{ marginTop: "10px", marginLeft: "20px" }}>
              Approved By:{" "}
            </Typography>
            <TextField
              size="small"
              style={{ backgroundColor: "white", marginRight: "85px" }}
              variant="outlined"
              id="approved"
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.verticalGap}
          >
            <Typography style={{ marginTop: "10px", marginLeft: "20px" }}>
              Wire By:{" "}
            </Typography>
            <TextField
              size="small"
              style={{ backgroundColor: "white", marginRight: "85px" }}
              variant="outlined"
              id="approved"
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.verticalGap}
          >
            <Typography style={{ marginTop: "10px", marginLeft: "20px" }}>
              Booked By:{" "}
            </Typography>
            <TextField
              size="small"
              style={{ backgroundColor: "white", marginRight: "85px" }}
              variant="outlined"
              id="approved"
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.verticalGap}
          >
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
