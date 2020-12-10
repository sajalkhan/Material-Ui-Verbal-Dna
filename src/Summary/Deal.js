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
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import UseStyles from "./UseStyles";




const Deal=({dealData})=>{
    const classes = UseStyles();

    return(
        <TableContainer component={Paper}>
        <Table  className="uniqueName" aria-label="simple table">
           <TableHead className="tableHead">
            <TableRow>
              <TableCell  className={classes.header_bold} align="left"></TableCell>
              <TableCell  className={classes.header_bold} align="left"></TableCell>
              <TableCell  className={classes.header_bold} align="left">Structure</TableCell>
              <TableCell  className={classes.header_bold} align="left">Financed Amount</TableCell>
              <TableCell  className={classes.header_bold} align="left">Down Payment</TableCell>
              <TableCell  className={classes.header_bold} align="left">Monthly Payment</TableCell>
              <TableCell  className={classes.header_bold} align="left">NMEF Doc Fees</TableCell>
              <TableCell  className={classes.header_bold} align="left">Total Due to Vendor</TableCell>
              <TableCell  className={classes.header_bold} align="left">Total Due at Signing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dealData.map((row,i) => (
              <TableRow className={row.Selected_for_Proposal__c ? classes.deal_grid_selected : null } key={i}>
                {row.Selected_for_Proposal__c ?  
                 <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null } align="left" >S</TableCell> :
                 <TableCell align="left" > </TableCell>
                }
                <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null }  align="left" >00{ (i+1)}</TableCell>
                <TableCell  className={row.Selected_for_Proposal__c ? classes.text_color_set : null } align="left" >{row.Structure__c}</TableCell>
                <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null }  align="left" >{row.cfa__c}</TableCell>
                <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null }  align="left"  >{row.ccr__c}</TableCell>
                <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null }  align="left" >{row.Payment__c}</TableCell>
                <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null }  align="left" >{row.Total_Due_To_NMEF__c}</TableCell>
                <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null }  align="left" >{row.ccr__c}</TableCell>
                <TableCell className={row.Selected_for_Proposal__c ? classes.text_color_set : null }  align="left" >{row.Total_Customer_Due_At_Signing__c}</TableCell>
              </TableRow>
             ))}
          </TableBody>
          </Table>
      </TableContainer>
    );


}
export default Deal;
