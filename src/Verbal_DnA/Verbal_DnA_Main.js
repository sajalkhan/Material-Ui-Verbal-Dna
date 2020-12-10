import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import PreFundingVerbal_main from "./PreFundingVerbal/PreFundingVerbal_main";
import Guarantor_Main from "./Guarantor/Guarantor_Main";

const PreFundingData = {
  isFranchise: false,
  assetType: "Titled",
};
const GuarantorData=[
  {Id:1 ,Name:'ABC'},
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };

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

const Verbal_DnA_Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={classes.main_grid} p={2} bgcolor="background.paper">
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
            <Tab label="pre-Funding Verbal" {...a11yProps(0)} />
            <Tab label="Guarantor" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <PreFundingVerbal_main PreFundingData={PreFundingData} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Guarantor_Main  GuarantorData={GuarantorData} />
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </Box>
  );
};
export default Verbal_DnA_Main;
