import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  Button,
  Select,
  MenuItem,
  TableContainer,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import PrintIcon from "@material-ui/icons/Save";
import PrefundingVerbalCommonTable from "./PrefundingVerbalCommonTableTemplate";

const useStyles = makeStyles({
  buttonActive: {
    backgroundColor: "green",
  },
  buttonInActive: {
    backgroundColor: "#C51162",
  },
  buttonPrimary: {
    backgroundColor: "#303F9F",
  },
  tableCellWidth: {
    "& .MuiTableCell-root": {
      width: "90%",
    },
  },
  tableRowHeight: {
    "& .MuiTableRow-root": {
      height: "10px",
    },
  },
});

export default function PrefundingVerbalTitledLoanTemplate() {
  const classes = useStyles();
  const [understandEnglish, setUnderstandEnglish] = useState(" ");
  const [businessAddress, setBusinessAddress] = useState("");
  const [getPhone, setPhone] = useState(" ");
  const [language, setLanguage] = useState("");
  const [ddlLeasedOn, setddlLeasedOn] = useState("");
  const [loanOpen, setloanOpen] = React.useState(false);
  const [leaseOpen, setleaseOpen] = React.useState(false);
  const [bothOpen, setbothOpen] = React.useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleBusinessAddress = (event) => {
    setBusinessAddress(event.target.value);
  };

  const handleLease = (event) => {
    setddlLeasedOn(event.target.value);
  };

  return (
    <TableContainer>
      <Table>
        <TableRow>
          <TableCell colSpan={2}>
            **Be sure you are speaking to the borrower. If a company, LLC,
            partnership, be sure you’re speaking to the owner.**
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan={2}>
            <h3>Introduction</h3>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan={2}>
            Introduce yourself and state that you are calling to discuss their
            financing prior to the funding the transaction.
            <br /> Then state:
            <strong>
              &ldquo;Please note that this phone call will be recorded for our
              records.&rdquo;
            </strong>
            <br /> Hit
            <b>*9</b> to commence recording
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: "90%" }}>
            1) Do you speak/understand English?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={
                understandEnglish === " "
                  ? classes.buttonPrimary
                  : understandEnglish == "true"
                  ? classes.buttonPrimary
                  : classes.buttonInActive
              }
              onClick={() => setUnderstandEnglish("false")}
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
              className={
                understandEnglish === "true"
                  ? classes.buttonActive
                  : classes.buttonPrimary
              }
              onClick={() => setUnderstandEnglish("true")}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        {understandEnglish == "false" ? (
          <TableRow>
            <TableCell style={{ width: "65%", textAlign: "right" }}>
              Choose Language
            </TableCell>
            <TableCell>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
        ) : null}

        <TableRow>
          <TableCell colSpan={2}>
            If NO, there will need to be a translator (or use Spanish script if
            Spanish is the customer’s language)
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan={2}>
            2) Please provide the following information for me have the customer
            provide this information to you in order to confirm we have accurate
            information:
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan={2}>
            <PrefundingVerbalCommonTable />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            3) We also communicate via text messages, can you receive text
            messages
            <br /> and is this the best number for us to use (if no, get the
            number)?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={
                getPhone === " "
                  ? classes.buttonPrimary
                  : getPhone == "true"
                  ? classes.buttonPrimary
                  : classes.buttonInActive
              }
              onClick={() => setPhone("false")}
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
              className={
                getPhone === "true"
                  ? classes.buttonActive
                  : classes.buttonPrimary
              }
              onClick={() => setPhone("true")}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        {getPhone == "false" ? (
          <TableRow>
            <TableCell style={{ textAlign: "left" }}>Phone#</TableCell>
            <TableCell>
              <TextField id="standard-basic" fullWidth />
            </TableCell>
          </TableRow>
        ) : null}

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            4) To what address should we mail correspondence?
          </TableCell>
          <TableCell style={{ width: "500px" }}>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={businessAddress}
              onChange={handleBusinessAddress}
            >
              <MenuItem value="Business Address">Business Address</MenuItem>
              <MenuItem value="Home Address">Home Address</MenuItem>
              <MenuItem value="PO Box">PO Box</MenuItem>
            </Select>
          </TableCell>
        </TableRow>

        {businessAddress == "PO Box" ? (
          <TableRow>
            <TableCell style={{ textAlign: "left" }}>PO Box Address</TableCell>
            <TableCell>
              <TextField id="standard-basic" fullWidth />
            </TableCell>
          </TableRow>
        ) : null}

        <TableRow>
          <TableCell colSpan={2}>
            5) If NMEF cannot get a hold of you, do you have an alternate person
            you authorize us to contact? Please provide:
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>Name</TableCell>
          <TableCell>
            <TextField id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>Address</TableCell>
          <TableCell>
            <TextField id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>Cell #</TableCell>
          <TableCell>
            <TextField id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            Relationship to borrower
          </TableCell>
          <TableCell>
            <TextField id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow className={classes.tableRowHeight}>
          <TableCell colSpan={2}>
            <strong>
              <u style={{ fontSize: "18px" }}>6) Equipment Only:</u>
            </strong>
          </TableCell>
        </TableRow>

        <TableRow className={classes.tableRowHeight}>
          <TableCell colSpan={2}>
            a. Please give brief description of what the equipment is being used
            for?
          </TableCell>
        </TableRow>

        <TableRow className={classes.tableRowHeight}>
          <TableCell colSpan={2}>
            <TextField id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>b. Have you taken delivery of the equipment?</TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>c. What date was the equipment delivered?</TableCell>
          <TableCell>
            <TextField type="date" id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            d. (If applicable) Have you tested the equipment and found it
            satisfactory?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow className={classes.tableRowHeight}>
          <TableCell colSpan={2}>
            <strong>
              <u style={{ fontSize: "18px" }}>7) Truck/Trailer Only:</u>
            </strong>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            a. Will you be driving the truck yourself and if not who?
          </TableCell>
          <TableCell>
            Driver Name
            <TextField id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            b. Who will be using the truck/trailer and what is his/her cell #?
          </TableCell>
          <TableCell>
            Driver Cell #
            <TextField id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            c. Have you taken delivery of the equipment?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            d. What date was the equipment delivered?
          </TableCell>
          <TableCell>
            <TextField type="date" id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            e. Have you inspected the equipment and found it acceptable?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            f. If a truck, with whom are you leased onto or are you hauling
            under your own authority?
          </TableCell>
          <TableCell style={{ width: "500px" }}>
            <Select
              style={{ float: "right", width: "100px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ddlLeasedOn}
              onChange={handleLease}
            >
              <MenuItem value="true">Leased On</MenuItem>
              <MenuItem value="false">Own Authority</MenuItem>
            </Select>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            g. Motor Carrier US DOT # for haul:
          </TableCell>
          <TableCell>
            <TextField type="date" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            8) Have you made a down payment to Seller?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            9) How much money did you pay as your down payment?
          </TableCell>
          <TableCell>
            <TextField type="text" fullWidth />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            10) How did you pay your down payment (cash, cashier’s check or
            personal check or by trade in of another vehicle)?
          </TableCell>
          <TableCell>
            <Select
              style={{ float: "right", width: "100%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ddlLeasedOn}
              onChange={handleLease}
            >
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Cashier check">Cashier check</MenuItem>
              <MenuItem value="Personal check">Personal check</MenuItem>
              <MenuItem value="Trade in">Trade in</MenuItem>
              <MenuItem value="Wire">Wire</MenuItem>
              <MenuItem value="Credit card">Credit card</MenuItem>
            </Select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            11) If a trade-in, if so provide details?
          </TableCell>
          <TableCell>
            <TextField id="txtTradeInAssetDetails" fullWidth />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            12) Reaffirm the repayment terms---
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            <strong>Terry Currier,</strong>, you acknowledge that you are
            borrowing <span style={{ background: "yellow" }}>$18,396.00</span>{" "}
            from us
            <br />
            To be repaid over <span style={{ background: "yellow" }}>
              60
            </span>{" "}
            with monthly payments of{" "}
            <span>
              <span style={{ background: "yellow" }}> $476.09 </span> and{" "}
              <span style={{ background: "yellow" }}> </span>
            </span>{" "}
            <span style={{ background: "yellow" }}>$ $476.09 </span>{" "}
            automatically deducted from your bank account.
            <br /> You're confirming that you made a down payment of{" "}
            <span style={{ background: "yellow" }}>$ $476.09 </span> to the
            seller
            <br />
            (and/or you traded in a{" "}
            <TextField id="txtTradeInAssetDetails" width="10%" /> which the
            dealer gave you ${" "}
            <TextField id="txtTradeInAssetDetails" width="10%" /> trade in
            value)
            <br />
            Your payments are due on the
            <Select
              style={{ width: "5%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ddlLeasedOn}
              onChange={handleLease}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            13) Your contract states, (section #17 for a Loan or #26 for a
            Lease), that it is governed by the laws of the State of California.
            Do you agree to the California governing law?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            <div
              className="showHide"
              onClick={() => {
                setloanOpen(!loanOpen);
              }}
            >
              <header hover="true">For Loan Only </header>
            </div>
            <Collapse in={loanOpen}>
              <p>
                We are only making a loan to you. We are not the dealer you are
                purchasing the equipment from or in any way affiliated with the
                dealer. You are responsible for the operation and maintenance of
                the equipment and are still required to repay your loan with us
                even if the equipment becomes unusable. We have no obligation to
                pay for any repairs. You are also responsible for maintaining
                insurance throughout the term of your loan with us. And you may
                not sell or otherwise give up possession of the equipment during
                the term of your loan without our written consent.
              </p>
            </Collapse>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            <div
              className="showHide"
              onClick={() => {
                setleaseOpen(!leaseOpen);
              }}
            >
              <header hover="true">For Lease Only </header>
            </div>
            <Collapse in={leaseOpen}>
              <p>
                This is a non-cancelable lease of the equipment to you and not a
                loan or a rental agreement. We remain owner of the equipment and
                you are a lessee. We are not the dealer or in any way affiliated
                with the dealer. You are responsible for the operation and
                maintenance of the equipment and are still required to repay
                your lease with us even if the equipment becomes unusable. We
                have no obligation to pay for any repairs. You are also
                responsible for maintaining insurance throughout the term of
                your lease with us. You do not have the right to terminate this
                lease whether by prepayment or otherwise unless we specifically
                agree in writing to accept a negotiated prepayment.
              </p>
            </Collapse>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            <div
              className="showHide"
              onClick={() => {
                setbothOpen(!bothOpen);
              }}
            >
              <header hover="true">For Loan and Lease </header>
            </div>
            <Collapse in={bothOpen}>
              <p>
                If you are in violation of your contract with us we have the
                right to demand payment of all of your payments under your
                contract as well as the right to repossess the equipment, and
                you will still be responsible for the full balance of your
                contract plus late fees, interests, costs of repossession and
                other related costs less proceeds received from reselling your
                equipment. We will take legal actions to recover any deficiency
                and obtain a judgment against you.
              </p>
            </Collapse>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            Have you carefully read the terms of your contract with us to make
            sure you understand it? Do you have any questions regarding your
            contract?
            <br />
            <h4>
              <span className="showSpanDesing">
                If clarification is needed, address appropriately.
              </span>
            </h4>
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            Please confirm that you are the person who read and signed the
            contract with us?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            Do you authorize us to pay the balance of the purchase price for the
            equipment to the seller and do you agree to pay us back in full
            under the terms of your contract with us?
          </TableCell>
          <TableCell>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ float: "right", marginLeft: "2px" }}
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{
                marginRight: "2px",
                float: "right",
              }}
            >
              Yes
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            Your Acceptance Date for the equipment is the date we pay the dealer
            which is:
          </TableCell>
          <TableCell>
            <TextField type="date" id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            Once again, thank you for your business and time. If you need any
            additional assistance, please feel free to contact your customer
            service representative. Please take down the following contact
            information for your customer service representative:
            <br />
            Phone #: 1-800-998-7852
            <br />
            Email Address : cservice@nmef.com
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }}>
            Your Acceptance Date for the equipment is the date we pay the dealer
            which is:
          </TableCell>
          <TableCell>
            <TextField type="date" id="standard-basic" fullWidth />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            Person who performed pre-funding verbal call:
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            <TextField type="text" id="standard-basic" width="30%" />
            <br />
            NMEF representative (Sign & Print Name)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "left" }} colSpan="2">
            <TextField type="date" id="standard-basic" width="30%" />
            <br />
            Date of call:
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ textAlign: "right" }} colSpan="2">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<PrintIcon />}
            >
              Save
            </Button>
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}
