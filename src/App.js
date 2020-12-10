import logo from "./logo.svg";
import "./App.css";
import Summary_combined_all from "./Summary/summary_combined_all";
import ACH_Form from "./ACH_Data/ACH_Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import StipulationSatisfaction from "./StipulationSatisfaction/StipulationSatisfaction";
// import Stipulation_Satisfaction_Table from "./StipulationSatisfaction/";
import PurchasePrice from "./PurchasePrice/PurchasePrice";
import FundingChecklist from "./Funding_Checklist/FundingChecklist";
import Verbal_DnA_Main from "./Verbal_DnA/Verbal_DnA_Main";
import FundingReconciliation from "./FundingReconciliation/FundingReconciliation";

function App() {
  const ACHData = {
    Acceptance_Date: "2017-05-24",
    Bank_Name: "NBC",
    Lease_Start_Date: "2017-05-24",
    DFI_Number: "3211111123",
    First_Payment_Date: "2017-05-24",
    Account_Number: "999886664444",
    Prenot_Date: "2017-05-24",
    Account_Category: "I",
    ACH_Start_Date: "2017-05-24",
    Account_Type: "C",
  };

  return (
    // <ConfirmProvider>
    <Box className="App" p={4} bgcolor="background.paper">
      <Grid container>
        {/* <Grid className="leftmenu"   align="left" item xs={2}>
                   <div style={{height:"400px",border:'2px solid black'}}>
                       Menu List
                   </div>
                  </Grid> */}
        <Grid align="center" item xs={12}>
          <Router>
            <div className="navHead">
              <Switch>
                <Link className="navButton" to="/summary">
                  Summary
                </Link>
              </Switch>
              <Switch>
                <Link className="navButton" to="/ach">
                  ACH Data
                </Link>
              </Switch>
              <Switch>
                <Link className="navButton" to="/stipulation">
                  Stipulation Satisfaction
                </Link>
              </Switch>
              <Switch>
                <Link className="navButton" to="/purchase-price">
                  Purchase Price
                </Link>
              </Switch>
              <Switch>
                <Link className="navButton" to="/funding-reconciliation">
                  Funding Reconciliation
                </Link>
              </Switch>
              <Switch>
                <Link className="navButton" to="/verbal_dnA">
                  Verbal DnA
                </Link>
              </Switch>
            </div>

            <Route path="/summary">
              <Summary_combined_all />
            </Route>
            <Route path="/ach">
              <ACH_Form ACHData={ACHData} />
            </Route>
            <Route path="/funding_checklist">
              <FundingChecklist />
            </Route>

            <Route path="/verbal_dnA">
              <Verbal_DnA_Main />
              {/* <Guarantor /> */}
            </Route>
            <Route path="/stipulation">
              <StipulationSatisfaction />
            </Route>
            <Route path="/purchase-price">
              <PurchasePrice />
            </Route>
            <Route path="/funding-reconciliation">
              <FundingReconciliation />
            </Route>
          </Router>
        </Grid>
      </Grid>
    </Box>
    // {/* </ConfirmProvider> */}
  );
}

export default App;
