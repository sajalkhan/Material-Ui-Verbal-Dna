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
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import UseStyles from "./UseStyles";
 import MenuItem from '@material-ui/core/MenuItem';
import {Address2Types,States} from '../Data/constants';
import MoneyTextFiled from '../assets/MoneyDataStyle';
import Cleave from 'cleave.js/react';


const ApplicantEdit=({ApplicantData})=>{
    const classes = UseStyles();

    const [address2Type,setAddress2Type]=useState("");
    const [state,setState]=useState("");
   
    useEffect(()=> {
       if(ApplicantData){
           setAddress2Type(ApplicantData.address2Type);
           setState(ApplicantData.State);
       }
	},[ApplicantData]);


    return(
        <form  noValidate autoComplete="off">

        <TableContainer component={Paper}>
                   <Table   aria-label="simple table">
                     <TableBody>
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="left" >Broker Name</TableCell> <TableCell align="left">{ApplicantData.Broker_Name}</TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">Broker Program</TableCell> <TableCell align="left">{ApplicantData.Broker_Program}</TableCell>
                     </TableRow>
                     <TableRow className={classes.row_color2}>
                         <TableCell  className={classes.cell_header_bold} align="left">Contract Number</TableCell> <TableCell align="left">{ApplicantData.Contract_Number}</TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">Account Manager</TableCell> <TableCell align="left">{ApplicantData.Account_Manager}</TableCell>
                     </TableRow>
                     <TableRow className={classes.row_color1} >
                         <TableCell  className={classes.cell_header_bold} align="left">Referral Party Id</TableCell> <TableCell align="left">{ApplicantData.Referral_Party_Id}</TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">Invoice Amount</TableCell> 
                         <TableCell align="left">
                         {/* <MoneyTextFiled
                          style={{width:"18%", height:"41px"}}
									//reference={register}
								//	errors={errors}
									value={ApplicantData.Invoice_Amount ? ApplicantData.Invoice_Amount : null}
									//onChange={onCustomInvoiceValueChange}
								/> */}
                                <Cleave
                                disabled={false}

                                style={{border: '0px solid blue',borderRadius:'3px', color: 'black',width:'100%', height:'38px',fontSize:'12pt'}}
                                value={ApplicantData.Invoice_Amount ?  ApplicantData.Invoice_Amount : "0.0"}
                                options={{
                                prefix: '$',
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand'}} /> 
                             {/* <TextField  size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic"   defaultValue={ApplicantData.Invoice_Amount}/> */}
                             </TableCell>
                     </TableRow >
                     <TableRow  className={classes.row_color2}>
                         <TableCell  className={classes.cell_header_bold} align="left">FEIN</TableCell> 
                         <TableCell align="left">
                           <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.FEIN}/>
                         </TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">DBA</TableCell> 
                         <TableCell align="left">
                         <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.DBA}/></TableCell>
                     </TableRow>
                     <TableRow  className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="left">Name</TableCell>
                          <TableCell align="left">
                              <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.Name}/>
                          </TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">Street Address</TableCell>
                          <TableCell align="left">
                              <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.Street_Address}/>
                          </TableCell>
                     </TableRow>
                     <TableRow  className={classes.row_color2}>
                         <TableCell  className={classes.cell_header_bold} align="left">Business Start Date</TableCell> 
                         <TableCell align="left">
                           <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.Business_Start_Date} type="date"/>
                         </TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">Street Address Line 2</TableCell> <TableCell align="left">
                       {
                           console.log('address2Type - ',address2Type)
                       }
                         <Select
                            value={address2Type}
                            style={{width:"18%", height:"41px"}}
                              variant="outlined" 
                            onChange={(e)=>setAddress2Type(e.target.value)}
                            >
                            {
                                Address2Types.map((item,i)=>(
                                <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                                ))
                            } 
                         </Select> &nbsp;
                           <TextField size="small"  style={{width:"80%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.Street_Address_Line_2}/>
                      </TableCell>
                     </TableRow >
                     <TableRow  className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="left">Industry Experience</TableCell>
                          <TableCell align="left">
                              <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.Industry_Experience} type="date"/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">City/State/Zipcode</TableCell>
                          <TableCell align="left">
                              <TextField size="small"  style={{width:"35%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.City}/>&nbsp;&nbsp;
                            {
                             console.log('state -',state)
                            }
                              <Select
                                    value={state}
                                    style={{width:"30%", height:"41px"}}
                                    variant="outlined" 
                                    onChange={(e)=>setState(e.target.value)}
                                    >
                                    {
                                        States.map((item,i)=>(
                                        <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                                        ))
                                    } 
                              </Select> &nbsp;&nbsp;&nbsp;
                              <TextField size="small"  style={{width:"25%"}}  variant="outlined" id="filled-basic" value={ApplicantData.ZipCode}/>&nbsp;&nbsp;
                       </TableCell>
                     </TableRow>
                     <TableRow  className={classes.row_color2}>
                         <TableCell  className={classes.cell_header_bold} align="left">Phone</TableCell> 
                         <TableCell align="left"><TextField size="small" style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ApplicantData.Phone}/>
                         </TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">Fax</TableCell>
                          <TableCell align="left"><TextField size="small"  style={{width:"100%"}}  variant="outlined"   id="filled-basic" defaultValue={ApplicantData.FAX}/></TableCell>
                     </TableRow>
                     <TableRow  className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="left">Mobile</TableCell>
                          <TableCell align="left"><TextField size="small"  style={{width:"100%"}}  variant="outlined"  id="filled-basic" defaultValue={ApplicantData.Mobile}/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">Email</TableCell> 
                         <TableCell align="left">
                             <TextField size="small"  style={{width:"100%"}}  variant="outlined" type="email"  id="filled-basic" defaultValue={ApplicantData.Email}/></TableCell>
                     </TableRow>
                     <TableRow  className={classes.row_color2}>
                         <TableCell  className={classes.cell_header_bold} align="left">CDL Number</TableCell> 
                         <TableCell align="left"><TextField size="small"  style={{width:"100%"}}  variant="outlined"  id="filled-basic" defaultValue={ApplicantData.CDL_Number}/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="left">CDL Expiration Date</TableCell>
                          <TableCell align="left"><TextField size="small"  style={{width:"100%"}}  variant="outlined" type="date" id="filled-basic" defaultValue={ApplicantData.CDL_Expiration_Date}/></TableCell>
                     </TableRow>
                     <TableRow  className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="left">Is Discounted</TableCell> 
                         <TableCell align="left">{ApplicantData.Is_Discounted}</TableCell>
                     </TableRow>
                     <TableRow  className={classes.row_color2}>
                         <TableCell align="right" colSpan="4">
                         <Button variant="contained" color="secondary">
                                Update
                         </Button>
                    </TableCell> 
                     </TableRow>
                     </TableBody>
                     </Table>
                 </TableContainer>
           </form>
    );


}
export default ApplicantEdit;
