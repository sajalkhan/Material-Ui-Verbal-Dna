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



const Owner=({ownerInfo})=>{
    const classes = UseStyles();

    return(
        <TableContainer component={Paper}>
            <Table  className="uniqueName" aria-label="simple table">
            <TableBody>
            <TableRow className={classes.row_color1}>
                <TableCell className={classes.cell_header_bold} align="left">Current Owner</TableCell> 
                <TableCell align="left">{ownerInfo.current_owner_name}</TableCell>
           </TableRow>
           <TableRow  className={classes.row_color2}>
                <TableCell className={classes.cell_header_bold}  align="left">Previous Owner</TableCell> <TableCell align="left">{ownerInfo.previous_owner_name}</TableCell>
           </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
    );


}
export default Owner;
