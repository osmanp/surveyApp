import { Container, Grid, IconButton, makeStyles, Paper,Tooltip } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SaveIcon from "@material-ui/icons/Save";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { withStyles } from '@material-ui/core/styles';


const MyToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#C5CDD4',
    color: 'rgba(0, 0, 0, 0.87)', 
    font:'Consolas',
    fontSize: 18,
  },
}))(Tooltip);

const actions = [
  {
    icon: <AddCircleOutlineIcon />,
    name: "AddPage",
    toolTip: "New Page",
  },

  { icon: <AddBoxIcon />, name: "AddSection", toolTip: "New Section" },
  { icon: <SaveIcon />, name: "Save", toolTip: "Save Survey" },
  { icon: <VisibilityIcon />, name: "Preview", toolTip: "Preview" },
];
const useStyles = makeStyles({
  tooltip: {
    fontSize: 24,
    backgroundColor: 'black'
  }
});
const SurveyBuilderActions = ({ eventHandler }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  return (
    <Container maxWidth="xs" style={{ marginTop: "20px" }}>
      <Paper variant='elevation' elevation={2} style={{ borderRadius: '20px',backgroundColor:'#C5CDD4' }}>
        <Grid container direction='row'>
          {actions.map((action) => {
            return (
              <Grid key={action.name} item xs>
                <MyToolTip title={action.toolTip} placement='top'>
                  <IconButton
                    key={action.name}
                    color='primary'
                    tooltipTitle={action.toolTip}
                    onClick={() => eventHandler(action.name)}
                    TooltipClasses={classes}
                  >{action.icon}
                  </IconButton>
                </MyToolTip>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      {/* </SpeedDial> */}
    </Container>
  );
};

export default SurveyBuilderActions;
