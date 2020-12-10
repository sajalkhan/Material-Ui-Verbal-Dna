import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
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
import './FundingChecklist_Style.css';
import FundingResponseTable from "./FundingResponseTable";
import { ConfirmProvider } from "material-ui-confirm";

const responseData=[
    {Question_Text__c:'Equipment Verification Review GPS Install/Aspen Inspection',Response_Value__c:'true',Status__c:'Completed',Comments__c:'',Is_Global__c:true},
    {Question_Text__c:'Upfront Monies Rec\'d? (USD 500.00)',Response_Value__c:'false',Status__c:'Open',Comments__c:'',Is_Global__c:true},
    {Question_Text__c:'Vendor Invoice/Bill of Sale- (Lease Sold to North Mill)',Response_Value__c:'',Status__c:'',Comments__c:'',Is_Global__c:true},
    {Question_Text__c:'Proof of Payment to Dealer/Vendor by TPR (Discount Deal)',Response_Value__c:'NA',Status__c:'Not Applicable',Comments__c:'',Is_Global__c:false},
    {Question_Text__c:'Test',Response_Value__c:'NA',Status__c:'Not Applicable',Comments__c:'',Is_Global__c:false},
];

const FundingChecklist=()=>{
    const classes = UseStyles();
    // const [accountCategory,setAccountCategory]=useState("");
    // const [accountType,setAccountType]=useState("");

    // useEffect(()=> {
    //     if(ACHData){
    //         setAccountCategory(ACHData.Account_Category);
    //         setAccountType(ACHData.Account_Type);
    //     }
    //  },[ACHData]);
  


    return(
        <ConfirmProvider>
        <Box className={classes.main_grid}   p={4} bgcolor="background.paper">
        <Grid container  className={classes.box_design}>
                <Grid   align="center" item xs={12}>
                    <div className="headerText">
                <span className="headerBoldText" style={{fontSize:'23pt'}}>Funding Checklist</span> 
                   </div>
               </Grid>
               <Grid  className={classes.grid_space} item sm={3} xs={2}>
               
                </Grid>
                 <Grid item sm={6} className={classes.grid_space} xs={8}  zeroMinWidth>
                  <TableContainer component={Paper}>
                   <Table   aria-label="simple table">
                     <TableBody>
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="left" >LESSEE/DEBTOR NAME</TableCell>
                         <TableCell  align="left">	Adult Medicine Of Lake County, INC</TableCell> 
                     </TableRow>
                     <TableRow className={classes.row_color2}>
                         <TableCell  className={classes.cell_header_bold} align="left" >ACCOUNT#</TableCell>
                         <TableCell  align="left">C046214-A063658</TableCell> 
                     </TableRow>
                     <TableRow className={classes.row_color1}>
                         <TableCell  className={classes.cell_header_bold} align="left" >BROKER</TableCell>
                         <TableCell  align="left">	MMP Capital Inc.</TableCell> 
                     </TableRow>
                  
                     </TableBody>
                     </Table>
                 </TableContainer>

               </Grid>
               <Grid className={classes.grid_space} align="right" item sm={3} xm={2}>
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
               <Grid align="left" className={classes.grid_space} item sm={12} xm={12}>
                <FundingResponseTable ResponseInfo={responseData} />
               </Grid>

       </Grid>
       </Box>
       </ConfirmProvider>
    );
}

export default FundingChecklist;


