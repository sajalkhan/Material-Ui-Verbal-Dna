import React, { useState, useEffect } from "react";
import './summary.css';
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
import UseStyles from "./UseStyles";
import Cleave from 'cleave.js/react';
import Moment from 'moment';


const Applicant=({ApplicantData})=>{
    const classes = UseStyles();

    return(
        <TableContainer component={Paper}>
        <Table  className="uniqueName" aria-label="simple table">
          <TableBody>
          <TableRow  className={classes.row_color1}>
           <TableCell className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">Broker Name</TableCell> <TableCell align="left">{ApplicantData.Broker_Name}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left" fontWeight="fontWeightBold">Broker Program</TableCell> <TableCell align="left">{ApplicantData.Broker_Program}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color2}>
              <TableCell  className={classes.cell_header_bold} align="left">Contract Number</TableCell> <TableCell align="left">{ApplicantData.Contract_Number}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">Account Manager</TableCell> <TableCell align="left">{ApplicantData.Account_Manager}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color1}>
              <TableCell  className={classes.cell_header_bold} align="left">Referral Party Id</TableCell> <TableCell align="left">{ApplicantData.Referral_Party_Id}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">Invoice Amount</TableCell>
               <TableCell align="left">
               <Cleave
                disabled={true}
                style={{border: 0, color: 'black',fontSize:'12pt'}}
                value={ApplicantData.Invoice_Amount ?  ApplicantData.Invoice_Amount : "0.0"}
                options={{
                prefix: '$',
                numeral: true,
                numeralThousandsGroupStyle: 'thousand'}} /> 
                   </TableCell>
          </TableRow>
          <TableRow  className={classes.row_color2}>
              <TableCell  className={classes.cell_header_bold} align="left">FEIN</TableCell> <TableCell align="left">{ApplicantData.FEIN}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">DBA</TableCell> <TableCell align="left">{ApplicantData.DBA}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color1}>
              <TableCell  className={classes.cell_header_bold} align="left">Business Entity Type</TableCell> <TableCell align="left">{ApplicantData.Business_Entity_Type}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">Street Address</TableCell> <TableCell align="left">{ApplicantData.Street_Address}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color2}>
              <TableCell  className={classes.cell_header_bold} align="left">Name</TableCell> <TableCell align="left">{ApplicantData.Name}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">Street Address Line 2</TableCell> <TableCell align="left">{ApplicantData.Street_Address_Line_2}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color1}>
              <TableCell  className={classes.cell_header_bold} align="left">Business Start Date</TableCell>
               <TableCell align="left">{Moment(ApplicantData.Business_Start_Date).format('MM/DD/YYYY') }</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">City/State/Zipcode</TableCell> 
              <TableCell align="left">{ApplicantData.City},{ApplicantData.State},{ApplicantData.ZipCode}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color2}>
              <TableCell  className={classes.cell_header_bold} align="left">Industry Experience</TableCell>
               <TableCell align="left">{Moment(ApplicantData.Industry_Experience).format('MM/DD/YYYY') }</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">Fax</TableCell> <TableCell align="left">{ApplicantData.FAX}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color1}>
              <TableCell  className={classes.cell_header_bold} align="left">Phone</TableCell> <TableCell align="left">{ApplicantData.Phone}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">Email</TableCell> <TableCell align="left">{ApplicantData.Email}</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color2}>
              <TableCell  className={classes.cell_header_bold} align="left">Mobile</TableCell> <TableCell align="left">{ApplicantData.Mobile}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">CDL Expiration Date</TableCell>
               <TableCell align="left">{Moment(ApplicantData.CDL_Expiration_Date).format('MM/DD/YYYY') }</TableCell>
          </TableRow>
          <TableRow  className={classes.row_color1}>
              <TableCell  className={classes.cell_header_bold} align="left">CDL Number</TableCell> <TableCell align="left">{ApplicantData.CDL_Number}</TableCell>
              <TableCell  className={classes.cell_header_bold} align="left">Is Discounted</TableCell> <TableCell align="left">{ApplicantData.Is_Discounted}</TableCell>
          </TableRow>
          </TableBody>
          </Table>
      </TableContainer>
    );


}
export default Applicant;
