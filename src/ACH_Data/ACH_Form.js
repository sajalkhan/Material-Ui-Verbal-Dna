import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import TextField  from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import { SpaOutlined } from "@material-ui/icons";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import UseStyles from "./UseStyles";
import MenuItem from '@material-ui/core/MenuItem';
import {AccountCategory,AccountType} from '../Data/constants'
import './ACH_Style.css';

const ACH_Form=({ACHData})=>{
    const classes = UseStyles();
    const [accountCategory,setAccountCategory]=useState("");
    const [accountType,setAccountType]=useState("");

    useEffect(()=> {
        if(ACHData){
            setAccountCategory(ACHData.Account_Category);
            setAccountType(ACHData.Account_Type);
        }
     },[ACHData]);
 

    return(
        <Box className={classes.main_grid}   p={4} bgcolor="background.paper">
        <Grid container  className={classes.box_design}>
                <Grid   align="left" item xs={12}>
                    <div className="headerText">
                <span className="headerBoldText">ACH Data Entry </span> Crazy J'S Concrete, INC.
                   </div>
               </Grid>
               <Grid className={classes.grid_space}   align="center" item xs={12}>
            <TableContainer component={Paper}>
                   <Table className="tableBackSet"  aria-label="simple table">
                     <TableBody>
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="right" >Acceptance Date</TableCell>
                          <TableCell align="left">
                          <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" type="date" defaultValue= {ACHData.Acceptance_Date}/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="right">Bank name</TableCell> 
                         <TableCell align="left"><TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" defaultValue={ACHData.Bank_Name}/></TableCell>
                     </TableRow>
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="right" >Lease Start Date</TableCell>
                          <TableCell align="left">
                          <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" type="date" defaultValue= {ACHData.Lease_Start_Date}/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="right">DFI Number</TableCell> 
                         <TableCell align="left"><TextField size="small" style={{width:"100%"}}  variant="outlined" type="text" id="filled-basic" defaultValue={ACHData.DFI_Number}/></TableCell>
                     </TableRow>
                   
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="right" >First Payment Date</TableCell>
                          <TableCell align="left">
                          <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" type="date" defaultValue= {ACHData.First_Payment_Date}/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="right">Account Number</TableCell> 
                         <TableCell align="left"><TextField size="small" style={{width:"100%"}}  variant="outlined" type="text" id="filled-basic" defaultValue={ACHData.Account_Number}/></TableCell>
                     </TableRow>
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="right" >Prenot Date</TableCell>
                          <TableCell align="left">
                          <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" type="date" defaultValue= {ACHData.Prenot_Date}/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="right">Account Category</TableCell> 
                         <TableCell align="left">
                         <Select
                            value={accountCategory}
                            size="small"
                            style={{width:"100%", height:"41px",marginTop:"13px"}}  variant="outlined" 
                            onChange={(e)=>setAccountCategory(e.target.value)}
                            >
                            {
                                AccountCategory.map((item,i)=>(
                                <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                                ))
                            } 
                         </Select> &nbsp;
                        </TableCell>
                     </TableRow>
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="right" >ACH Start Date</TableCell>
                          <TableCell align="left">
                          <TextField size="small"  style={{width:"100%"}}  variant="outlined" id="filled-basic" type="date" defaultValue= {ACHData.ACH_Start_Date}/></TableCell>
                         <TableCell  className={classes.cell_header_bold} align="right">Account Type</TableCell> 
                         <TableCell align="left">
                         <Select
                            value={accountType}
                            size="small"
                            style={{width:"100%", height:"41px",marginTop:"13px"}}  variant="outlined" 
                            onChange={(e)=>setAccountType(e.target.value)}
                            >
                            {
                                AccountType.map((item,i)=>(
                                <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                                ))
                            } 
                         </Select> &nbsp;
                        </TableCell>
                     </TableRow>
                   
                     <TableRow  className={classes.row_color2}>
                         <TableCell align="center" colSpan="4">
                         <Button variant="contained" color="primary">
                                Save
                         </Button>
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

export default ACH_Form;


