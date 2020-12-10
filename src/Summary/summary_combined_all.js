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
import TextField from '@material-ui/core/TextField';
import './summary.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Owner from "./Owner";
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import Applicant from "./Applicant";
import { SpaOutlined } from "@material-ui/icons";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ApplicantEdit from "./ApplicantEdit";
import Guarantor from "./Guarantor";
import Deal from "./Deal";
import UseStyles from "./UseStyles";
import IconButton from '@material-ui/core/IconButton';





            const OwnerData={current_owner_name:'Dawne Williams',
                            previous_owner_name:'Krista Roy'
                            };

            const ApplicantData={
                Broker_Name:'ABC Corp', Contract_Number:'C045647-A062995',Referral_Party_Id:'02',
                Broker_Program:'Broker', Account_Manager:'Dawne Williams',Invoice_Amount:'$1564001',
                FEIN:'472664090', DBA:'None',Business_Entity_Type:'Corporation',
                Street_Address:'472-250 Diamond Crest Road',
                Name:'Crazy JS Concrete, INC.',
                address2Type: 'Building',
                Street_Address_Line_2:'471-250 Diamond Crest Road',
                Business_Start_Date:"2017-05-24",
                City:'Susanville' ,
                State:'CO', 
                ZipCode:' 96130-5084' ,
                Industry_Experience:"2011-05-24",FAX:'None',
                Phone:'(530) 257-9681',Email:'crazyjsconcrete@gmail.com',
                Mobile:'(530) 257-9681',CDL_Expiration_Date:"2017-05-24",
                CDL_Number:'123456789',Is_Discounted:'Yes'
            };

            const GuarantorData=[
                {name:'Juan Jimenez',	SSN_FEIN:'551636994',Date_of_Birth:'08/19/1980',Phone:'(530) 257-9681',Marital_Status:'Married',Address:'471-250 Diamond Crest Road'},
                {name:'Juan Jimenez Jnr',	SSN_FEIN:'551635994',Date_of_Birth:'08/19/1999',Phone:'(530) 257-9681',Marital_Status:'Unknown',Address:'471-250 Diamond Crest Road'}
              ];

              const dealData=[
                {Selected_for_Proposal__c:true, name:'Deal-001',Structure__c:'Loan',cfa__c:'$8,005.00',ccr__c:'$8,9995.00',Payment__c:'$2,989.00.00',Total_Due_To_NMEF__c:'$1,600.00',ccr__c:'$8,995.00',Total_Customer_Due_At_Signing__c:'$9,595.00'},
                {Selected_for_Proposal__c:false, name:'Deal-002',Structure__c:'Loan',cfa__c:'$8,005.00',ccr__c:'$8,9995.00',Payment__c:'$2,989.00.00',Total_Due_To_NMEF__c:'$2,600.00',ccr__c:'$8,995.00',Total_Customer_Due_At_Signing__c:'$9,595.00'},
                {Selected_for_Proposal__c:false, name:'Deal-003',Structure__c:'Loan',cfa__c:'$8,005.00',ccr__c:'$8,9995.00',Payment__c:'$2,989.00.00',Total_Due_To_NMEF__c:'$3,600.00',ccr__c:'$8,995.00',Total_Customer_Due_At_Signing__c:'$9,595.00'}
                
              ];

const Summary_combined_all=()=>{

    const classes = UseStyles();
    const [isShow,setIsShow]=useState(false);

    return(
        <Box className={classes.main_grid} p={4} bgcolor="background.paper">
        <Grid container >
                <Grid   align="right" item xs={12}>
                <hr />
                <span>
                <h3 className={classes.PreFun_text_color_set}>Pre funded Deal <Checkbox   /></h3>
                </span>
               </Grid>
               <Grid className={classes.grid_space}   align="left" item xs={12}>
                <span className="headerText">Owner</span>
               </Grid>
               <Grid item xs={12}>
                <Owner ownerInfo={OwnerData}/>
               </Grid>
               <Grid className={classes.grid_space} item xs={12}>
                   <div  className="applicantHead">
                    <span className="headerTextApplicant">
                    <h3>Applicant</h3> 
                    </span>
                    <span  onClick={()=> setIsShow(!isShow)} >
                    {
                        isShow ?  <span>
                         <IconButton color="primary"  aria-label="upload picture" component="span">
                        <SaveIcon fontSize='small' style={{backgroundColor:'#3f6791',color:'white',borderRadius:'5px',padding:'3px'}}  />
                        </IconButton> 
                         <IconButton color="primary"  aria-label="upload picture" component="span">
                        <CloseOutlinedIcon fontSize='small' style={{backgroundColor:'#3f6791',color:'white',borderRadius:'5px',padding:'3px'}}  />
                        </IconButton> 
                        </span> :                            
                        <IconButton color="primary"  aria-label="upload picture" component="span">
                        <EditIcon fontSize='small' style={{backgroundColor:'#3f6791',color:'white',borderRadius:'5px',padding:'3px'}}  />
                        </IconButton>  
                    }
                    </span>
                    </div>
               </Grid>
                <Grid item xs={12}>
                 {
                        isShow ?  <ApplicantEdit ApplicantData={ApplicantData} /> :  <Applicant ApplicantData={ApplicantData} />
                 }
               </Grid>
               <Grid  className={classes.grid_space}  item xs={12} align="left">
                    <span className="headerText">
                        Guarantors
                    </span>
                </Grid>
               <Grid item xs={12}>
                <Guarantor GuarantorData={GuarantorData} />
               </Grid>
               <Grid  className={classes.grid_space}  item xs={12} align="left">
                    <span className="headerText">
                        Deals
                    </span>
                </Grid>
               <Grid item xs={12}>
                 <Deal dealData={dealData} />
               </Grid>
       </Grid>
       </Box>
    );
}

export default Summary_combined_all;


