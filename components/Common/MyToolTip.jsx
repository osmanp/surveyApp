import { Tooltip } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const MyToolTip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#C2EBDD',
     color: 'rgba(0, 0, 0, 0.87)',  
    fontSize: 18,
  },
}))(Tooltip);


export default MyToolTip;