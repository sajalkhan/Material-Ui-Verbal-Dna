import React, { useState, useEffect } from "react";
import './FundingChecklist_Style.css';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import MaterialButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import UseStyles from "./UseStyles";
import { Button} from "react-bootstrap";
import { ConfirmProvider,useConfirm } from "material-ui-confirm";




const FundingResponseTable=({ResponseInfo})=>{
    const classes = UseStyles();
    const confirm = useConfirm();
    const [responseData,setResponseInfo]=useState([]);
    const [editComments,setEditCommnets]=useState([]);

    const HandleEventResponseButton=(dataList,ResponseVal,StatusVal,ind)=>{
        if(dataList === undefined)
        return;
        let items = [...responseData];
        console.log('First data- ', items[ind]);
        let item = {...items[ind]};
        if(item.Response_Value__c === ResponseVal){
            item.Response_Value__c="";
            item.Status__c="";
        }
        else{
            item.Response_Value__c=ResponseVal;
            item.Status__c=StatusVal;
        }
        items[ind] = item;
        console.log('Change data- ', items[ind]);
        setResponseInfo(items);

    }

    
    const HandleEventComments=(text,ind)=>{
        if(ind < 0)
        return;
        let items = [...responseData];
        console.log('First data- ', items[ind]);
        let item = {...items[ind]};
        item.Comments__c=text;
        items[ind] = item;
        console.log('Change data- ', items[ind]);
        setResponseInfo(items);

    }

    const HandleEventDeleteButton=(ind)=>{
        if(ind === undefined)
        return;
        confirm({ confirmationButtonProps:{color:'primary',size:'large'}, description: `This will permanently delete the row.` })
        .then(() =>
            {
        console.log('');
        if (ind !== -1) {
            console.log('First- ',responseData)
             let items = [...responseData.filter((e,i)=> i !== ind)];
            // let items = [...responseData];
            //  let newVl= items.slice(ind,1);
            console.log('Index-',ind);
            console.log(items);
            let newVal=[...items];
            setResponseInfo(newVal);
            }
        }
        )
        .catch(() => console.log("Deletion cancelled."));
    }
    
    
    const HandleEventAddButton=()=>{
        // confirm({ title:'Are you sure?', description: `This will add one new row.` })
        // .then(() =>
        //     {
                let items = [...responseData];
                let ind=items.length;
                let item={};
                console.log('Index'+ind);
                console.log(items);
                if (ind !== -1) {
                    item.Question_Text__c=" ";
                    item.Status__c="";
                    item.Response_Value__c="";
                    item.Comments__c=" ";
                    item.Is_Global__c=false;
                    items[ind]=item;
                    console.log('Add item -',items)
                }
                setResponseInfo(items);
        // }
        // )
        // .catch(() => console.log("Add cancelled."));
    }
    
    const HandleEventEditButton=(ind)=>{
        if(ind < 0)
        return;
        // confirm({ title:'Are you sure?', description: `This will enable the comments section for edit.` })
        // .then(() =>
        //     {
                let items = [...editComments];
                console.log('items data- ', items);
                console.log('First data- ', items[ind]);
                let item = {...items[ind]};
                item.Status=false;
                items[ind] = item;
                console.log('Change data- ', items[ind]);
                setEditCommnets(items);
        // }
        // )
        // .catch(() => console.log("Deletion cancelled."));
    }

    useEffect(()=> {
        if(ResponseInfo){
            setResponseInfo(ResponseInfo);
            let items=[];
            for(var i=0;i< ResponseInfo.length;i++){
                let item = {Ind:i, Status: true};
                items.push(item);
            }
            setEditCommnets(items);
          console.log('editComments-',items);
        }
     },[ResponseInfo]);
  

    return(
        <div>
        <TableContainer component={Paper}>
            <Table  className="uniqueName" aria-label="simple table">
            <TableHead className="tableHead">
            <TableRow>
              <TableCell  className={classes.header_bold} align="center">CREDIT STIPS- REVIEWED/SATISFIED</TableCell>
              <TableCell  className={classes.header_bold} align="center">RESPONSE</TableCell>
              <TableCell  className={classes.header_bold} align="center">STATUS</TableCell>
              <TableCell  className={classes.header_bold} align="center">COMMENTS</TableCell>
              <TableCell  className={classes.header_bold} align="center">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
                {
                    responseData.map((item,index)=>(
                    
                        <TableRow key={index} className={classes.row_color1}>
                        <TableCell align="left" style={{width:'40%'}}>
                            {
                                console.log('Error',item+'Is_Global__c- '+item.Is_Global__c),
                                item.Is_Global__c ?
                        <TextField size="small"  style={{width:"100%",backgroundColor:'#ffffff',color:'black',fontSize:'22pt'}} color='primary'  variant="filled" id="filled-basic"  value={item.Question_Text__c}/>
                         :
                        <TextField size="small"  style={{width:"100%",backgroundColor:'#ffffff',color:'black',fontSize:'22pt'}} color='primary'  variant="filled" id="filled-basic" defaultValue={item.Question_Text__c}/>

                            }
                          </TableCell>
                        <TableCell align="center" style={{width:'14%'}}>
                        <Button className={item.Response_Value__c === 'true' ?  "btn_responseYes" : "btn_response"}  type="button" onClick={()=>HandleEventResponseButton(item,"true","Completed",index) } >Yes</Button>
                        <Button className={item.Response_Value__c === 'false' ?  "btn_responseNo" : "btn_response"} onClick={()=>HandleEventResponseButton(item,"false","Open",index) } type="button">No</Button>
                        <Button className={item.Response_Value__c === 'NA' ?  "btn_responseNA" : "btn_response"} onClick={()=>HandleEventResponseButton(item,"NA","Not Applicable",index) } type="button">N/A</Button>
                            {/* {item.Response_Value__c} */}
                            </TableCell>
                        <TableCell align="center"  style={{width:'12%'}}>
                            <span className={item.Status__c ?  item.Status__c === 'Completed' ? "Completed" : item.Status__c === 'Open' ? "Open" : "Not_Applicable" : null }>  {item.Status__c}</span>
                          </TableCell>
                        <TableCell align="left" style={{width:'22%'}}>
                            {
                                console.log('Main editComments-',editComments)
                            }
                          <TextareaAutosize rowsMin={2} variant="filled"  disabled={editComments.length > 0 ? editComments[index]?.Status === true ? true : false : true} aria-label="empty textarea"   defaultValue={item.Comments__c} onChange={(e)=>HandleEventComments(e.target.value,index)} style={{width:'100%',fontSize:'18px'}} />
                        {/* <TextField size="small" disabled={editComments.length > 0 ? editComments[index]?.Status === true ? true : false : true}  style={{width:"100%",backgroundColor:'#ffffff',color:'black',fontSize:'22pt'}} color='primary'  variant="filled" id="filled-basic" defaultValue={item.Comments__c} onChange={(e)=>HandleEventComments(e.target.value,index)} /> */}
                         </TableCell>
                        <TableCell  align="center" style={{width:'12%'}}>
                           
                             <IconButton color="primary"  aria-label="upload picture" component="span" onClick={()=>HandleEventEditButton(index)} >
                             <EditIcon fontSize='small' style={{backgroundColor:'#3f6791',color:'white',borderRadius:'5px',padding:'3px'}}  />
                             </IconButton>
                            {
                            item.Is_Global__c === false ? 
                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>HandleEventDeleteButton(index)}   >
                            <DeleteIcon fontSize='small' style={{backgroundColor:'#3f6791',color:'white',borderRadius:'5px',padding:'3px'}} /></IconButton> : null
                            }
                         </TableCell> 
                         </TableRow>

                    ))
                }
           
            </TableBody>
            </Table>
        </TableContainer>
        <div className={classes.grid_space}>
        <span style={{marginTop:'100px'}}>
        <AddIcon fontSize='small'  style={{backgroundColor:'#3f6791',color:'white',borderRadius:'5px',padding:'4px'}} onClick={()=>HandleEventAddButton()} />
        </span> <br/>
        <MaterialButton
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        >
        Save
        </MaterialButton>
        </div>
     

        </div>
    );


}
export default FundingResponseTable;
