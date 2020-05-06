import { Grid, Container, IconButton, makeStyles, Paper, Tooltip } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SaveIcon from '@material-ui/icons/Save';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { withStyles } from '@material-ui/core/styles';

const MyToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.grey,
    // color: 'rgba(0, 0, 0, 0.87)',  
    fontSize: 16,
  },
}))(Tooltip);

const actions = [
  {
    icon: <SaveIcon fontSize='small' />,
    name: 'Save',
    toolTip: 'Save Question',
    groups: [2]
  },
  {
    icon: <EditIcon fontSize='small' />,
    name: "Edit",
    toolTip: "Edit Question",
    groups: [1]
  },
  {
    icon: <AddCircleOutlineIcon fontSize='small' />,
    name: "Add",
    toolTip: "Add Question",
    groups: [1]
  },
  { icon: <DeleteIcon fontSize='small' />, name: "Delete", toolTip: "Delete Question", groups: [1] },
  { icon: <FileCopyIcon fontSize='small' />, name: "Copy", toolTip: "Copy Question", groups: [1] },
  { icon: <ClearAllIcon fontSize='small' />, name: "Clear", toolTip: "Clear Question", groups: [2] },
];
const useStyles = makeStyles({
  tooltip: {
    fontSize: 24,
  }
});
const QuestionFormActions = ({ eventHandler, senderID, group }) => {
  const classes = useStyles();  
  return (
    <Container style={{ marginTop: '20px' }}>
      <Paper variant='elevation' elevation={4} style={{ borderRadius: '20px',maxWidth:'80%' }}>
        <Grid container direction='row' justify='flex-start'>

          {actions.filter(a => ~a.groups.indexOf(group)).map((action) => {
            return (
              <Grid key={action.name} item xs={6}>
                <MyToolTip title={action.toolTip} placement='top'>
                  <IconButton
                    key={action.name}
                    color='primary'
                    tooltipTitle={action.toolTip}
                    onClick={() => eventHandler(action.name, senderID)}
                    TooltipClasses={classes}
                  >{action.icon}
                  </IconButton>
                </MyToolTip>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
};

export default QuestionFormActions;
