import { Container, Grid, IconButton, makeStyles, Paper } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SaveIcon from "@material-ui/icons/Save";
import VisibilityIcon from "@material-ui/icons/Visibility";

const actions = [
  {
    icon: <AddCircleOutlineIcon />,
    name: "AddQuestion",
    tooltipTitle: "Add Question",
  },

  { icon: <AddBoxIcon />, name: "AddPage", tooltipTitle: "New Page" },
  { icon: <SaveIcon />, name: "Save", tooltipTitle: "Save Survey" },
  { icon: <VisibilityIcon />, name: "Preview", tooltipTitle: "Preview" },
];
const useStyles = makeStyles({
  tooltip: {
    fontSize: 24,
  }
});
const SurveyBuilderSpeedDial = ({ eventHandler }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  return (
    <Container maxWidth="xs" style={{ marginTop: "20px" }}>
      <Paper variant='elevation' elevation={2} style={{ borderRadius: '20px' }}>
        <Grid container direction='row'>
          {actions.map((action) => {
            return (
              <Grid key={action.name} item xs>
                <IconButton
                  key={action.name}

                  tooltipTitle={action.name}
                  onClick={() => eventHandler(action.name)}
                  TooltipClasses={classes}
                >{action.icon}
                </IconButton>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      {/* </SpeedDial> */}
    </Container>
  );
};

export default SurveyBuilderSpeedDial;
