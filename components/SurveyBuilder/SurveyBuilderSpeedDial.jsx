import { Container, makeStyles,IconButton, Paper } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SaveIcon from "@material-ui/icons/Save";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";
import EditIcon from '@material-ui/icons/Edit';

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
      <Paper variant='elevation' elevation={2} style={{borderRadius:'20px'}}>
      {/* <SpeedDial
        ariaLabel="SpeedDial example"
        hidden={false}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="right"
        FabProps={{
          color: "secondary",
          size: "large"          
        }}        
      > */}
        {actions.map((action) => {
          
          return (
            <IconButton
              key={action.name}
              
              tooltipTitle={action.name}
              onClick={() => eventHandler(action.name)}
              TooltipClasses={classes}
            >{action.icon}
              </IconButton>
          );
        })}
        </Paper>
      {/* </SpeedDial> */}
    </Container>
  );
};

export default SurveyBuilderSpeedDial;
