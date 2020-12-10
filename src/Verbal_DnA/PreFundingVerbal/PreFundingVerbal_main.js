import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import UseStyles from "../UseStyles";
import VerbalDnACommonHeaderTable from "./VerbalDnACommonHeaderTable";
import PrefundingVerbalTitledLoanTemplate from "./PrefundingVerbalTitledLoanTemplate";
import PrefundingVerbalTitledLeaseTemplate from "./PrefundingVerbalTitledLeaseTemplate";
import PrefundingVerbalFranchiseLoanTemplate from "./PrefundingVerbalFranchiseLoanTemplate";
import PrintIcon from "@material-ui/icons/Print";
import Button from "@material-ui/core/Button";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import IconButton from "@material-ui/core/IconButton";
import IsPrefundedDealModal from "./IsPrefundedDeal_Modal";
import VerbalDnaHistoryModal from "./Verbaldna_History_Modal";

const applicationData = {
  Applicant_Name__c: "Terry Currier",
  Contract_Number__c: "C044925-A062144",
  contactName: "Terry Currier",
  TPR_Name: "Atlas Financial Services, LLC",
  Collateral: "2020 Power Line USA HD23",
  Dealer_Name: "Power Line U.S.A.",
};

const PreFundingVerbal_main = ({ PreFundingData }) => {
  const classes = UseStyles();
  const [accountCategory, setAccountCategory] = useState("");
  const [accountType, setAccountType] = useState("");
  const [isPrefundedDeal, seIsPrefundedDeal] = useState(" ");
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    };
  }, []);

  const selectedPrefundedDeal = (confirm) => {
    setOpen(false);
    confirm ? seIsPrefundedDeal("Yes") : seIsPrefundedDeal("No");
  };

  const closeHistoryModal = () => {
    setHistoryOpen(false);
  };

  return (
    <>
      <Box className={classes.main_grid} p={4} bgcolor="background.paper">
        <Grid container className={classes.box_design}>
          <Grid item xs={4}></Grid>
          <Grid align="center" item xs={4}>
            <p style={{ fontSize: "25px", marginTop: "0px" }}>
              Truck/Trailer Lease
            </p>
            <p style={{ fontSize: "25px", marginTop: "0px" }}>
              Pre-Funding Phone Verification
            </p>
          </Grid>
          <Grid item xs={4} align="right">
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
              onClick={() => setHistoryOpen(true)}
            >
              <FormatAlignJustifyIcon
                fontSize="small"
                style={{
                  backgroundColor: "#303F9F",
                  color: "white",
                  borderRadius: "4px",
                  padding: "5px",
                }}
              />
            </IconButton>

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

          <Grid item xs={12} style={{ marginBottom: "20px" }}>
            <VerbalDnACommonHeaderTable applicationData={applicationData} />
          </Grid>

          <Grid item xs={12}>
            {/* <PrefundingVerbalFranchiseLoanTemplate /> */}
            {isPrefundedDeal === " " ? null : isPrefundedDeal == "Yes" ? (
              <PrefundingVerbalTitledLoanTemplate />
            ) : (
              <PrefundingVerbalTitledLeaseTemplate />
            )}
          </Grid>
        </Grid>
      </Box>

      <IsPrefundedDealModal
        openModal={open}
        selectedOption={selectedPrefundedDeal}
      />

      <VerbalDnaHistoryModal
        openModal={historyOpen}
        closeHistoryModal={closeHistoryModal}
      />
    </>
  );
};

export default PreFundingVerbal_main;
