import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles(theme => ({
    main_grid:{
      backgroundColor:'#F5F5F5',
    },
    cell_header_bold: {
        width: 200,
        fontWeight:'bold',
      },
    header_bold: {
        fontWeight:'bold',
      },
      grid_space:{
        marginTop:20,
        marginBottom:20,
        color: 'gray'
      },

      text_color_set:{
        color: 'gray',
      },

      row_color1:{
        backgroundColor:'FFFFFF',
      },
      row_color2:{
        backgroundColor:'#F5F5F5',
      },
      box_design:{
        border: '5px solid rgba(224, 224, 224, 1)',
        padding:20,
        borderRadius:20,
      }

  }));

  export default UseStyles;