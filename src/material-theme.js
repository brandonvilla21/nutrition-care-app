import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import white from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue[500]
  },
  drawer: {
    width: 230,
    color: white
  },
  raisedButton: {
    primaryColor: blue[500],
  }
});


export default theme;