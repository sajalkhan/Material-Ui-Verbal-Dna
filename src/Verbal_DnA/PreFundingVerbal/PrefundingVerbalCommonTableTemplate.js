import React from "react";
import {
  Paper,
  makeStyles,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& tr:nth-child(even)": {
      backgroundColor: "#F9F9F9",
    },
    "& p": {
      fontWeight: "bold",
    },
    "& i": {
      fontSize: "12px",
      position: "relative",
      top: "-15px",
    },
    "& .MuiTableRow-root": {
      height: "20px",
    },
    "& button": {
      marginLeft: "5px",
    },
  },
  table_row_height: {
    height: "30px",
  },
  table_content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  col_1: {
    width: "20%",
  },
  col_2: {
    width: "33%",
  },
  col_3: {
    width: "35%",
  },
  col_4: {
    width: "12%",
  },
});

const PrefundingVerbalCommonTableTemplate = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow className={classes.table_row_height}>
            <TableCell className={classes.col_1}></TableCell>
            <TableCell className={classes.col_2}>
              <p>Information in NG</p>
            </TableCell>
            <TableCell className={classes.col_3}>
              <p>Provided by Customer</p>
            </TableCell>
            <TableCell className={classes.col_4}>
              <p>Matches NG</p>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Your full name</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField fullWidth id="standard-basic" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Business Address</p>
              <i>(From Application)</i>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Search Address.."
              />
              <TextField fullWidth id="standard-basic" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%", paddingBottom: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Home Address</p>
              <i>(From Guarantor)</i>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Search Address.."
              />
              <TextField fullWidth id="standard-basic" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%", paddingBottom: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Date of Birth</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="date" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Social Security #</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>State of issue</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Location of Equipment</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Search Address.."
              />
              <TextField fullWidth id="standard-basic" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%", paddingBottom: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Purchase Price</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Equipment Description</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Odometer (if needed)</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Hourmeter (if needed)</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Work Phone #</p>
              <i>(From Application)</i>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Work Cell #</p>
              <i>(From Application)</i>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Home Phone #</p>
              <i>(From primary Guarantor)</i>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>

          <TableRow className={classes.table_row_height}>
            <TableCell>
              <p>Email Address</p>
              <i>(From Application)</i>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField id="date" fullWidth type="text" />
            </TableCell>
            <TableCell
              className={classes.table_content}
              style={{ paddingTop: "20%" }}
            >
              <Button size="small" variant="contained" color="primary">
                Yes
              </Button>
              <Button size="small" variant="contained" color="primary">
                No
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PrefundingVerbalCommonTableTemplate;
