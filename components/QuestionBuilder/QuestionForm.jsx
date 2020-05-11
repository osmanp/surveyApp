import { Container, Divider, FormControl, FormControlLabel, Grid, Paper, Switch, TextField } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import DateTimeAnswerOptions from './DateTimeAnswerOptions';
import FreeTextAnswerOptions from './FreeTextAnswerOptions';
import QuestionTypeDropDown from './QuestionTypeDropDown';
import SelectAnswerOptions from './SelectAnswerOptions';
import SelectMultiAnswerOptions from './SelectMultiAnswerOptions';
import SliderAnswerOptions from './SliderAnswerOptions';
const uuid = require('uuid');

const BodyOptions = (type, initialOptions, optionsChanged) => {

  switch (type) {
    case 'short-answer':
      return <FreeTextAnswerOptions type={'short'} initialOptions={initialOptions} optionsChanged={optionsChanged}></FreeTextAnswerOptions>;
    case 'long-answer':
      return <FreeTextAnswerOptions type={'long'} optionsChanged={optionsChanged} initialOptions={initialOptions}></FreeTextAnswerOptions>;
    case 'single-select-radio':
    case 'single-select-checkbox':
    case 'single-select-dropdown':
      return <SelectAnswerOptions type={type} initialOptions={initialOptions} optionsChanged={optionsChanged}></SelectAnswerOptions>;
    case 'rating-slider':
    case 'grid-slider':
    case 'lineer-slider':
    case 'radio-slider':
      return <SliderAnswerOptions type={type} initialOptions={initialOptions} optionsChanged={optionsChanged}></SliderAnswerOptions>;
    case 'liken-radio':
    case 'liken-checkbox':
      return <SelectMultiAnswerOptions type={type} initialOptions={initialOptions} optionsChanged={optionsChanged}></SelectMultiAnswerOptions>;
    case 'date':
      return <DateTimeAnswerOptions type='date' initialOptions={initialOptions} optionsChanged={optionsChanged}></DateTimeAnswerOptions>;
    case 'time':
      return <DateTimeAnswerOptions type='time' optionsChanged={optionsChanged} initialOptions={initialOptions}></DateTimeAnswerOptions>;
    default:
      break;
  }
};
const convertType = (mainType, question) => {
  switch (mainType) {
    case "free-text":
      return question.body.variant == 'long' ?  'long-answer' : 'short-answer';
    case "select":
      return 'single-select-' + question.body.variant;
    case "select-multi":
      return 'liken-' + question.body.variant;
    case "slider":
      return question.body.variant + '-slider';
    case "date-time":
      return question.body.variant;
    default:
      return 'short-answer';
  }
};

const QuestionForm = ({ initialQuestionTemplate, handlers }) => {

  const initialState = {
    id: initialQuestionTemplate.id || uuid.v4(),
    type: initialQuestionTemplate.type || 'free-text',
    isRequired: initialQuestionTemplate.isRequired || false,
    number: _.isNumber(initialQuestionTemplate.number) ? initialQuestionTemplate.number : 1,
    title: initialQuestionTemplate.title ? initialQuestionTemplate.title : { text: 'Untitled Question', description: "" },
    body: initialQuestionTemplate.body || { variant: 'short' },
    templateType: convertType(initialQuestionTemplate.type, initialQuestionTemplate)
  };

  const [title, setTitle] = React.useState(initialState.title.text);
  const [description, setDescription] = React.useState(initialState.title.description);
  const [required, setRequired] = React.useState(initialState.isRequired);
  const [questionTemplate, setQuestionTemplate] = React.useState(initialState);
  const [questionTemplateType, setQuestionTemplateType] = React.useState(initialState.templateType);

  React.useEffect(() => {
    setQuestionTemplate(initialState);
    setQuestionTemplateType(initialState.templateType);
    setTitle(initialState.title.text);
    setDescription(initialState.title.description);
    setRequired(initialState.isRequired);       
  }, [initialQuestionTemplate, questionTemplateType]);

  
  const optionsChanged = options => {
    let newQuestion = _.cloneDeep(questionTemplate);
    newQuestion.body = options;

    setQuestionTemplate(newQuestion);
    handlers.updateQuestion(newQuestion, newQuestion.id);
  };

  const handleTypeChange = type => {
    let newQuestion = _.cloneDeep(questionTemplate);
    switch (type) {
      case 'short-answer':
      case 'long-answer':
        newQuestion.type = 'free-text';
        break;
      case 'single-select-radio':
      case 'single-select-checkbox':
      case 'single-select-dropdown':
        newQuestion.type = 'select';
        break;
      case 'rating-slider':
      case 'grid-slider':
      case 'lineer-slider':
      case 'radio-slider':
        newQuestion.type = 'slider';
        break;
      case 'liken-radio':
      case 'liken-checkbox':
        newQuestion.type = 'select-multi';
        break;
      case 'date':
      case 'time':
        newQuestion.type = 'date-time';
        break;
    }
    switch (type) {
      case 'short-answer':
        newQuestion.body.variant = 'short';
        break;
      case 'long-answer':
        newQuestion.body.variant = 'long';
        break;
      case 'single-select-radio':
        newQuestion.body.variant = 'radio';
        break;
      case 'single-select-checkbox':
        newQuestion.body.variant = 'checkbox';
        break;
      case 'single-select-dropdown':
        newQuestion.body.variant = 'dropdown';
        break;
      case 'rating-slider':
        newQuestion.body.variant = 'rating';
        break;
      case 'grid-slider':
        newQuestion.body.variant = 'grid';
        break;
      case 'lineer-slider':
        newQuestion.body.variant = 'lineer';
        break;
      case 'radio-slider':
        newQuestion.body.variant = 'radio';
        break;
      case 'liken-radio':
        newQuestion.body.variant = 'radio';
        break;
      case 'liken-checkbox':
        newQuestion.body.variant = 'checkbox';
        break;
      case 'date':
        newQuestion.body.variant = 'date';
        break;
      case 'time':
        newQuestion.body.variant = 'time';
        break;
    }

    setQuestionTemplateType(type);
    setQuestionTemplate(newQuestion);
    handlers.updateQuestion(newQuestion);
  };

  const handleTitleChange = event => {
    let newQuestion = _.cloneDeep(questionTemplate);
    switch (event.target.id) {
      case 'question-text':
        newQuestion.title.text = event.target.value;
        setTitle(newQuestion.title.text);
        break;
      case 'question-description':
        newQuestion.title.description = event.target.value;
        setDescription(newQuestion.title.description);
        break;
      case 'required':
        newQuestion.isRequired = event.target.checked;
        setRequired(newQuestion.isRequired);
        break;
    }
    setQuestionTemplate(newQuestion);
    handlers.updateQuestion(newQuestion);
  };

  return (
    <Container maxWidth='md'>
      <Paper
        elevation={4}
        variant='elevation'
        style={{
          margin: '4px',
          marginTop: '20px',
          maxWidth: '100%',
          borderRadius: '20px',
          border:'0.15rem solid #41594F'
        }}>
        <Grid container direction='column' spacing={2} alignItems='stretch' alignContent='stretch' justify='center'>
          <Grid item xs>
            <FormControl
              style={{
                minWidth: '95%',
                marginTop: '20px',
                marginLeft: '20px',
                textAlign: 'center',
              }}>
              <Grid
                container
                direction='column'
                spacing={2}
                alignItems='stretch'
                alignContent='stretch'
                justify='center'>
                <Grid item xs>
                  {/* text */}
                  <TextField
                    id='question-text'
                    label='Question'
                    multiline
                    fullWidth
                    rows={2}
                    placeholder='Please enter question here'
                    variant='standard'
                    onChange={handleTitleChange}
                    value={title}
                  />
                </Grid>
                <Grid
                  item
                  container
                  xs
                  direction='row'
                  alignContent='stretch'
                  alignItems='center'
                  justify='flex-start'
                  spacing={2}>
                  <Grid item xs={6}>
                    {/* explanation */}
                    <TextField
                      id='question-description'
                      label='Question Description (Optional)'
                      fullWidth
                      placeholder='Please enter description here'
                      variant='standard'
                      onChange={handleTitleChange}
                      value={description}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <QuestionTypeDropDown templateType={questionTemplateType} handleChangeType={handleTypeChange}></QuestionTypeDropDown>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={<Switch id='required' name='required' checked={required}  onChange={handleTitleChange} />}
                      label='Required'
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
              minWidth: '95%',
              margin: '20px',
              textAlign: 'left',
            }}>
            {BodyOptions(questionTemplateType, questionTemplate.body, optionsChanged)}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default QuestionForm;
