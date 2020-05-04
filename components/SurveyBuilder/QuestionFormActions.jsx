import DeleteIcon from "@material-ui/icons/Delete";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import { Grid, IconButton, Tooltip } from "@material-ui/core";

const QuestionFormActions = ({formActionHandler}) => {
  return (
    <Grid
      container
      direction="row-reverse"
      spacing={1}
      alignItems="flex-end"
      alignContent="flex-end"
    >
      <Grid item xs={1}>
        <Tooltip
          id="button-delete"
          title="Delete"
          placement="top"
          enterDelay={100}
          leaveDelay={200}
        >
          <IconButton color="secondary" component="span" onClick={() => formActionHandler('Delete')}>
            <DeleteIcon  fontSize="medium" color='inherit' ></DeleteIcon>
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={1}>
        <Tooltip
          id="button-delete"
          title="Clear"
          placement="top"
          enterDelay={100}
          leaveDelay={200}
        >
          <IconButton color="secondary" component="span" onClick={() => formActionHandler('Clear')}>
            <ClearAllIcon fontSize="medium" color='inherit'></ClearAllIcon>
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={1}>
        <Tooltip
          id="button-delete"
          title="Copy"
          placement="top"
          enterDelay={100}
          leaveDelay={200}
        >
          <IconButton  component="span" onClick={() => formActionHandler('Copy')}>
            <FileCopyIcon fontSize="medium" color='secondary'></FileCopyIcon>
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default QuestionFormActions;
