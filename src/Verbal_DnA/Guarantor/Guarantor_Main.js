import React, { useState,useEffect } from "react";
import UseStyles from "../UseStyles";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import PreFundingGuarantorsTemplate from "./PreFundingGuarantorsTemplate";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  console.log('Hit - ',value+' index -',index+' children -',children);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Typography component={'span'}>{children}</Typography>
      )}
    </div>
  );
};


const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Guarantor_Main=({GuarantorData})=>{
    const classes = useStyles();
    const [guarantorInfo,setGuarantorInfo]=useState([]);
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    useEffect(()=> {
        if(GuarantorData){
            setGuarantorInfo(GuarantorData);
        }
     },[GuarantorData]);



  const handleChange = (event, newValue) => {
      console.log('newValue',newValue);
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const TabRet=({value})=>{
      return(
          console.log('value -',value),
        <TabPanel value={value} index={value} key={value} dir={theme.direction}>
        <PreFundingGuarantorsTemplate key={value} GuarantorInfo={guarantorInfo? guarantorInfo[value] : null} />
    </TabPanel>
      );
  }

  return (
    <Box className={classes.main_grid} p={1} bgcolor="background.paper">
      <Grid container className={classes.box_design}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            // variant="halfWidth"
            aria-label=""
          >
              {
                  guarantorInfo.map((item,i)=>(
                    <Tab key={i} label={'Guarantor '+(i+1)} {...a11yProps(i)} />
                  ))
              }
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
            <TabRet value={value} />
        </SwipeableViews>
      </Grid>
    </Box>
  );
};
export default Guarantor_Main;



