import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import FreeTextAnswerOptions from "./FreeTextAnswerOptions";
import SelectAnswerOptions from "./SelectAnswerOptions";
import SliderAnswerOptions from "./SliderAnswerOptions";
import _ from "lodash";
import React from "react";
import QuestionContainer from "../Question/QuestionContainer";

const AnswerOptions = (type, optionsChanged) => {
  switch (type) {
    case "free-text":
      return (
        <FreeTextAnswerOptions
          optionsChanged={optionsChanged}
        ></FreeTextAnswerOptions>
      );
    case "select-one":
    case "select-multi":
      return (
        <SelectAnswerOptions
          optionsChanged={optionsChanged}
        ></SelectAnswerOptions>
      );

    case "slider-discrete":
      return (
        <SliderAnswerOptions
          optionsChanged={optionsChanged}
        ></SliderAnswerOptions>
      );
    default:
      break;
  }
};

const QuestionForm = () => {
  let initalState = {
    id: 1,
    type: "free-text",
    number: "1",
    title: {
      text:"Question Body",
      explanation: "",
    },
    body: {
      freeTextOptions: {
        rows: 20,
        helperText: "Write less than 250 words",
      },
    },
  };
  const [question, setQuestion] = React.useState(initalState);
  const [type, setType] = React.useState("free-text");

  const optionsChanged = (options) => {
    console.log("options");
    let newQuestion = _.cloneDeep(question);
    newQuestion.body = options;
    setQuestion(newQuestion);
  };
  const handleChange = (event) => {
    let newQuestion = _.cloneDeep(question);
    newQuestion.type = event.target.value;
    setQuestion(newQuestion);
    setType(newQuestion.type);
  };
  const onTitleChange = (event) => {
    let newQuestion = _.cloneDeep(question);          
    switch (event.target.id) {
      case "question-number":
        newQuestion.number = event.target.value;
        break;
      case "question-body":
        newQuestion.title.text = event.target.value;
        break;
      case "question-footnote":
        newQuestion.title.explanation = event.target.value;
        break;
    }
    setQuestion(newQuestion);    
  };
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={6}>
        <FormControl style={{ minWidth: "500px", margin: "40px" }}>
          <Grid container direction="column" spacing={2}>
            {/* Title  */}
            <Grid container direction="column" spacing={2}>
              <Grid item xs>
                {/* number */}
                <TextField
                  id="question-number"
                  label="Question Number"
                  type="number"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={onTitleChange}
                />
              </Grid>
              <Grid item xs>
                {/* text */}
                <TextField
                  id="question-body"
                  label="Question"
                  multiline
                  fullWidth
                  rows={8}
                  placeholder="Please enter question here"
                  variant="outlined"
                  onChange={onTitleChange}
                />
              </Grid>
              <Grid item xs>
                {/* explanation */}
                <TextField
                  id="question-footnote"
                  label="Question Explanation"
                  multiline
                  fullWidth
                  rows={2}
                  placeholder="Please enter question explanation here"
                  variant="outlined"
                  onChange={onTitleChange}
                />
              </Grid>
              <Grid item xs>
                {/* image */}
              </Grid>
              <Grid item xs>
                {/* type */}
                <Select
                  id="select-type"
                  value={type}
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value={"free-text"}>Free Text</MenuItem>
                  <MenuItem value={"select-one"}>
                    Options With Single Choice
                  </MenuItem>
                  <MenuItem value={"select-multi"}>
                    Options With Multiple Choice
                  </MenuItem>
                  <MenuItem value={"slider-discrete"}>Slider</MenuItem>
                </Select>
              </Grid>
            </Grid>
            {/* Body */}
            <Grid container direction="column" spacing={2}>
              {AnswerOptions(type, optionsChanged)}
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <QuestionContainer question={question}></QuestionContainer>
      </Grid>
    </Grid>
  );
};

export default QuestionForm;
