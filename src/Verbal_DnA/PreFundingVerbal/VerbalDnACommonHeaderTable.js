import React, { useState, useEffect } from "react";
import '../Verbal_DnA.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import UseStyles from "../UseStyles";
import Cleave from 'cleave.js/react';
import Moment from 'moment';


const VerbalDnACommonHeaderTable=({applicationData})=>{
    const classes = UseStyles();

    return(
        <TableContainer component={Paper}>
        <Table  className="uniqueName" aria-label="simple table">
          <TableBody>
          <TableRow  className={classes.row_color1}>
           <TableCell className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">Customer Name</TableCell> 
           <TableCell align="left">{applicationData.Applicant_Name__c}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">Loan / Lease #</TableCell> 
              <TableCell align="left">{applicationData.Contract_Number__c}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color1}>
           <TableCell className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">Contact Name</TableCell> 
           <TableCell align="left">{applicationData.contactName}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">TPR Name</TableCell> 
              <TableCell align="left">{applicationData.TPR_Name}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color1}>
           <TableCell className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">Collateral</TableCell> 
           <TableCell align="left">{applicationData.Collateral}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">Dealer Name</TableCell> 
              <TableCell align="left">{applicationData.Dealer_Name}</TableCell>
          </TableRow>
         
          </TableBody>
          </Table>
      </TableContainer>
    );


}
export default VerbalDnACommonHeaderTable;
