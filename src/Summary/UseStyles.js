import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  main_grid: {
    backgroundColor: "#F5F5F5",
  },
  cell_header_bold: {
    width: 200,
    fontWeight: "bold",
  },
  header_bold: {
    fontWeight: "bold",
  },
  grid_space: {
    marginTop: 20,
    marginBottom: 20,
    color: "gray",
  },
  deal_grid_selected: {
    color: "#FFFFFF",
    backgroundColor: "#4B4E6D",
  },
  text_color_set: {
    color: "gray",
  },

  row_color1: {
    backgroundColor: "FFFFFF",
  },
  row_color2: {
    backgroundColor: "#F5F5F5",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
    height: "400px",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
  },
  verticalGap: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  input: {
    display: "none",
  },
  pink: {
    backgroundColor: "#F2DEDE",
  },
  green: {
    backgroundColor: "#DFF0D8",
  },
}));

export default UseStyles;
