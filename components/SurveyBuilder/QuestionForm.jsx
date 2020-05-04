import {
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  Paper,
  Select,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ShortTextIcon from "@material-ui/icons/ShortText";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import TimerIcon from "@material-ui/icons/Timer";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import _ from "lodash";
import React from "react";
import DateTimeAnswerOptions from "./DateTimeAnswerOptions";
import FreeTextAnswerOptions from "./FreeTextAnswerOptions";
import SelectAnswerOptions from "./SelectAnswerOptions";
import SelectMultiAnswerOptions from "./SelectMultiAnswerOptions";
import SliderAnswerOptions from "./SliderAnswerOptions";

import QuestionFormActions from "./QuestionFormActions";

const AnswerOptions = (type, optionsChanged) => {
  switch (type) {
    case "short-answer":
      return (
        <FreeTextAnswerOptions
          short={true}
          optionsChanged={optionsChanged}
        ></FreeTextAnswerOptions>
      );
    case "long-answer":
      return (
        <FreeTextAnswerOptions
          optionsChanged={optionsChanged}
        ></FreeTextAnswerOptions>
      );
    case "single-select-radio":
    case "single-select-checkbox":
    case "single-select-dropdown":
      return (
        <SelectAnswerOptions
          type={type}
          optionsChanged={optionsChanged}
        ></SelectAnswerOptions>
      );

    case "rating-slider":
    case "grid-slider":
    case "lineer-slider":
    case "radio-slider":
      return (
        <SliderAnswerOptions
          type={type}
          optionsChanged={optionsChanged}
        ></SliderAnswerOptions>
      );
    case "liken-radio":
    case "liken-checkbox":
      return (
        <SelectMultiAnswerOptions
          type={type}
          optionsChanged={optionsChanged}
        ></SelectMultiAnswerOptions>
      );
    case "date":
      return (
        <DateTimeAnswerOptions
          type="date"
          optionsChanged={optionsChanged}
        ></DateTimeAnswerOptions>
      );
    case "time":
      return (
        <DateTimeAnswerOptions
          type="time"
          optionsChanged={optionsChanged}
        ></DateTimeAnswerOptions>
      );
    default:
      break;
  }
};

const MenuCategory = (text, icon) => {
  return (
    <ListSubheader>
      <Typography variant="h6" align="left" color="secondary">
        {text}
      </Typography>

      <Divider flexItem></Divider>
    </ListSubheader>
  );
};
const MenuItemTypo = (text, value, icon) => {
  return (
    <MenuItem value={value}>
      <Grid
        container
        direction="row"
        alignContent="stretch"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <ListItemIcon>{icon}</ListItemIcon>
        </Grid>
        <Grid item>
          <ListItemText primary={text}></ListItemText>
        </Grid>
      </Grid>
    </MenuItem>
  );
};

const QuestionForm = ({ questionTemplate, handlers }) => {
  const [question, setQuestion] = React.useState(questionTemplate);
  const [type, setType] = React.useState("short-answer");

  React.useEffect(() => {
    setQuestion(questionTemplate);
  }, [questionTemplate]);

  const optionsChanged = (options) => {
    let newQuestion = _.cloneDeep(question);
    newQuestion.body = options;
    setQuestion(newQuestion);
    handlers.updateQuestion(newQuestion);
  };
  const handleChange = (event) => {
    let newQuestion = _.cloneDeep(question);
    switch (event.target.value) {
      case "short-answer":
      case "long-answer":
        newQuestion.type = "free-text";
        break;
      case "single-select-radio":
      case "single-select-checkbox":
      case "single-select-dropdown":
        newQuestion.type = "select";
        break;
      case "rating-slider":
      case "grid-slider":
      case "lineer-slider":
      case "radio-slider":
        newQuestion.type = "slider";
        break;
      case "liken-radio":
      case "liken-checkbox":
        newQuestion.type = "select-multi";
        break;
      case "date":
      case "time":
        newQuestion.type = "date-time";
      default:
        break;
    }
    setType(event.target.value);
    setQuestion(newQuestion);
    handlers.updateQuestion(newQuestion);
  };
  const handleTitleChange = (event) => {
    let newQuestion = _.cloneDeep(question);
    switch (event.target.id) {
      case "question-text":
        newQuestion.title.text = event.target.value;
        break;
      case "question-description":
        newQuestion.maxCharacter = event.target.value;
        break;
    }
    setQuestion(newQuestion);
    handlers.updateQuestion(newQuestion);
  };
  const handleActions = (event) => {
    switch (event) {
      case "Delete":
        handlers.handleActions("Delete");
        break;
      case "Clear":
        break;
      case "Copy":
        handlers.handleActions("Copy");
        break;

      default:
        break;
    }
  };
  return (
    <Container maxWidth="md">
      <Paper
        elevation={4}
        variant="elevation"
        style={{
          margin: "4px",
          marginTop: "20px",
          maxWidth: "100%",
          borderRadius:'20px'
        }}
      >
        <Grid
          container
          direction="column"
          spacing={2}
          alignItems="stretch"
          alignContent="stretch"
          justify="center"
        >
          <Grid item xs>
            <FormControl
              style={{
                minWidth: "95%",
                marginTop: "20px",
                marginLeft: "20px",
                textAlign: "center",
              }}
            >
              <Grid
                container
                direction="column"
                spacing={2}
                alignItems="stretch"
                alignContent="stretch"
                justify="center"
              >
                <Grid item xs>
                  {/* text */}
                  <TextField
                    id="question-text"
                    label="Question"
                    multiline
                    fullWidth
                    rows={2}
                    placeholder="Please enter question here"
                    variant="standard"
                    onChange={handleTitleChange}
                  />
                </Grid>
                <Grid
                  item
                  container
                  xs
                  direction="row"
                  alignContent="stretch"
                  alignItems="center"
                  justify="flex-start"
                  spacing={2}
                >
                  <Grid item xs={6}>
                    {/* explanation */}
                    <TextField
                      id="question-description"
                      label="Question Description (Optional)"
                      fullWidth
                      placeholder="Please enter description here"
                      variant="standard"
                      onChange={handleTitleChange}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Select
                      id="select-type"
                      value={type}
                      fullWidth
                      onChange={handleChange}
                    >
                      {MenuCategory("Text")}
                      {MenuItemTypo(
                        "Line Answer",
                        "short-answer",
                        <ShortTextIcon></ShortTextIcon>
                      )}
                      {MenuItemTypo(
                        "Paragraph Answer",
                        "long-answer",
                        <ViewHeadlineIcon></ViewHeadlineIcon>
                      )}
                      {MenuCategory("Scale")}
                      {MenuItemTypo(
                        "Radio",
                        "radio-slider",
                        <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
                      )}
                      {MenuItemTypo(
                        "Rating",
                        "rating-slider",
                        <StarHalfIcon />
                      )}
                      {MenuItemTypo(
                        "Grid",
                        "grid-slider",
                        <ViewModuleIcon></ViewModuleIcon>
                      )}
                      {MenuItemTypo(
                        "Lineer",
                        "lineer-slider",
                        <LinearScaleIcon></LinearScaleIcon>
                      )}
                      {MenuCategory("Select")}
                      {MenuItemTypo(
                        "Single",
                        "single-select-radio",
                        <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
                      )}
                      {MenuItemTypo(
                        "Multiple",
                        "single-select-checkbox",
                        <CheckBoxIcon></CheckBoxIcon>
                      )}
                      {MenuItemTypo(
                        "Dropdown",
                        "single-select-dropdown",
                        <ArrowDropDownCircleIcon></ArrowDropDownCircleIcon>
                      )}
                      {MenuCategory("Liken-style")}
                      {MenuItemTypo(
                        "Single",
                        "liken-radio",
                        <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
                      )}
                      {MenuItemTypo(
                        "Multi",
                        "liken-checkbox",
                        <CheckBoxIcon></CheckBoxIcon>
                      )}
                      {MenuCategory("Date - Time")}
                      {MenuItemTypo(
                        "Date",
                        "date",
                        <CalendarTodayIcon></CalendarTodayIcon>
                      )}
                      {MenuItemTypo("Time", "time", <TimerIcon></TimerIcon>)}
                    </Select>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={<Switch name="required" />}
                      label="Required"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item xs>
            <Divider></Divider>
          </Grid>
          <Grid
            item
            xs
            style={{
              minWidth: "95%",
              margin: "20px",
              textAlign: "left",
            }}
          >
            {AnswerOptions(type, optionsChanged)}
          </Grid>
          <Grid item xs>
            <Divider></Divider>
          </Grid>
          <Grid item xs>
            <QuestionFormActions
              formActionHandler={handleActions}
            ></QuestionFormActions>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default QuestionForm;
