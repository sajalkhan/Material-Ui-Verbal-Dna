import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  main_grid: {
    backgroundColor: "#F5F5F5",
    color: "black",
  },
  cell_header_bold: {
    width: 200,
    color: "black",
    fontWeight: "bold",
  },
  header_bold: {
    fontWeight: "bold",
    color: "black",
  },
  grid_space: {
    marginTop: 20,
    marginBottom: 20,
    color: "gray",
  },

  text_color_set: {
    color: "black",
  },

  row_color1: {
    backgroundColor: "FFFFFF",
  },
  row_color2: {
    backgroundColor: "#F5F5F5",
  },
  box_design: {
    border: "5px solid rgba(224, 224, 224, 1)",
    padding: 20,
    borderRadius: 20,
  },
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

}));

export default UseStyles;
