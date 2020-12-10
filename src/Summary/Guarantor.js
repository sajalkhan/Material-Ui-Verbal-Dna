import React, { useState, useEffect } from "react";
import './summary.css';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import Edit from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import UseStyles from "./UseStyles";
import Moment from 'moment';


const Guarantor=({GuarantorData})=>{
    const classes = UseStyles();

    return(
        <TableContainer component={Paper}>
        <Table  className="uniqueName" aria-label="simple table">
           <TableHead className="tableHead">
            <TableRow  className={classes.row_color1}>
              <TableCell className={classes.header_bold} align="left">Name</TableCell>
              <TableCell className={classes.header_bold}  align="left">SSN/FEIN</TableCell>
              <TableCell  className={classes.header_bold}  align="left">Date of Birth</TableCell>
              <TableCell className={classes.header_bold}  align="left">Phone</TableCell>
              <TableCell className={classes.header_bold}  align="left">Marital Status</TableCell>
              <TableCell className={classes.header_bold}  align="left">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {GuarantorData.map((row,i) => (
              <TableRow key={i} className={ i % 2 === 0?  classes.row_color2 : classes.row_color1} >
                <TableCell align="left" className="tableBorder">{row.name}</TableCell>
                <TableCell align="left" className="tableBorder">{row.SSN_FEIN}</TableCell>
                <TableCell align="left" className="tableBorder">{Moment(row.Date_of_Birth).format('MM/DD/YYYY') }</TableCell>
                <TableCell align="left" className="tableBorder" >{row.Phone}</TableCell>
                <TableCell align="left" className="tableBorder">{row.Marital_Status}</TableCell>
                <TableCell align="left" className="tableBorder">{row.Address}</TableCell>
                {/* <TableCell align="center" className="tableBorder"><Edit /></TableCell> */}
              </TableRow>
             ))}
          </TableBody>
          </Table>
      </TableContainer>
    );


}
export default Guarantor;
