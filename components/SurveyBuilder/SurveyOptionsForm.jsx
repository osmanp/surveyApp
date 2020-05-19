import { Button, Drawer, Paper, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, FormControl, FormControlLabel, Grid, InputAdornment, makeStyles, MenuItem, Select, Switch, TextField, Typography, IconButton } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { TwitterPicker } from 'react-color';
import _ from 'lodash';
const drawerWidth = '320px';

const useStyles = makeStyles({
    tooltip: {
        fontSize: 24,
    },
    drawer: {
        width: '100%',
        flexShrink: 1,
        overflow: 'auto',
        overflowY: 'unset',
        marginBottom: '200px'
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex: 0,
        paddingTop: '60px',
    },
    formControl: {
        margin: 1,
        minWidth: 120,
    }
});

const SurveyOptionsPanel = ({ handler }) => {
    const classes = useStyles();
    const [expand, setExpand] = React.useState(false);
    const [surveyOptions, setSurveyOptions] = React.useState({ surveyTheme: 'Default' });
    const handleChange = (event) => {
        const newOptions = _.cloneDeep(surveyOptions);
        switch (event.target.id) {
            case "select-theme":
                newOptions.surveyTheme = event.target.value;
                break;
            case "auto-pagination":
                newOptions.autoPagination = event.target.checked;
                break;
            case "question-per-page":
                newOptions.questionPerPage = event.target.value;
                break;
            case "background-color":
                newOptions.backgroundColor = event.target.value;
                break;
            default:
                break;
        }
        setSurveyOptions(newOptions);
        handler.updateSurveyOptions(newOptions);
    };
    return (
        <ExpansionPanel expanded={expand}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header"
                onClick={() => setExpand(!expand)}
            >
                <Typography variant='h6' align='center'>
                    <u>Survey Options</u>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container direction='row' spacing={2}>
                    {/* Theme */}
                    <Grid item container direction='column' xs={12} spacing={2}>
                        <Grid item >
                            <Typography variant='h6' align='left'>
                                Theme
                        </Typography>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <Select
                                    id="select-theme"
                                    value={surveyOptions.surveyTheme}
                                    style={{ minWidth: '280px' }}
                                    fullWidth
                                    label='Theme'
                                    variant='outlined'
                                    onChange={(event) => handleChange({ target: { id: 'select-theme', value: event.target.value } })}
                                >
                                    <MenuItem value={"Default"}>Default</MenuItem>
                                    <MenuItem value={"Formal"}>Formal</MenuItem>
                                    <MenuItem value={"Business"}>Business</MenuItem>
                                    <MenuItem value={"Education"}>Education</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' xs={12} spacing={2}>
                        <Grid item>
                            <Typography variant='h6' align='left'>
                                Background Color
                        </Typography>
                        </Grid>
                        <Grid item xs>
                            <TwitterPicker
                                id='background-color' triangle='hide' onChange={(color, event) => handleChange({
                                    target: {
                                        id: 'background-color',
                                        value: color.hex
                                    }
                                })} />
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <FormControlLabel
                            control={
                                <Switch
                                    id="auto-pagination"
                                    name="auto-pagination"
                                    color="secondary"
                                />
                            }
                            value={surveyOptions.autoPagination}
                            onChange={handleChange}
                            labelPlacement="end"
                            label="Auto pagination"
                        />
                        <TextField
                            id="question-per-page"
                            type="number"
                            variant="standard"
                            value={surveyOptions.questionPerPage}
                            onChange={handleChange}
                            style={{ maxWidth: "40%" }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">

                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end"> per page</InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>);
};
const TitleOptionsPanel = ({ handler }) => {
    const [titleOptions, setTitleOptions] = React.useState({});
    const handleChange = (event) => {
        const newOptions = _.cloneDeep(titleOptions);
        switch (event.target.id) {
            case "show-estimated-time":
                newOptions.showEstimatedTime = event.target.checked;
                break;
            case "estimated-time":
                if (event.target.value < 0) {
                    event.target.value = 0;
                }
                newOptions.estimatedTime = event.target.value;
                break;
            case "show-question-count":
                newOptions.showQuestionCount = event.target.checked;
                break;
            case "show-question-pbar":
                newOptions.showProgressBar = event.target.value;
                break;
            default:
                break;
        }
        setTitleOptions(newOptions);
        handler.updateTitleOptions(newOptions);
    };
    const [expand, setExpand] = React.useState(false);
    return (
        <ExpansionPanel expanded={expand}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setExpand(!expand)}
            >
                <Typography variant='h6' align='center'>
                    <u>Title Options</u>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container direction='column' xs={12} spacing={2} alignItems='flex-start' alignContent='center'>
                    <Grid item xs>
                        <FormControlLabel
                            control={
                                <Switch
                                    id="show-estimated-time"
                                    name="show-estimated-time"
                                    color="secondary"
                                />
                            }
                            value={titleOptions.showEstimatedTime}
                            onChange={handleChange}
                            labelPlacement="end"
                            label="Estimated time"
                        />
                        {titleOptions.showEstimatedTime ?
                            <TextField
                                id="estimated-time"
                                type="number"
                                variant="standard"
                                style={{ maxWidth: "40%" }}
                                value={titleOptions.estimatedTime}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccessTimeIcon fontSize="small"></AccessTimeIcon>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">Minute</InputAdornment>
                                    ),
                                }}
                            /> :
                            <TextField
                                id="estimated-time"
                                type="number"
                                variant="standard"
                                style={{ maxWidth: "40%" }}
                                value={titleOptions.estimatedTime}
                                onChange={handleChange}
                                disabled
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccessTimeIcon fontSize="small"></AccessTimeIcon>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">Minute</InputAdornment>
                                    ),
                                }}
                            />}
                    </Grid>
                    <Grid item xs>
                        <FormControlLabel
                            control={
                                <Switch
                                    id="show-question-count"
                                    name="show-question-count"
                                    color="secondary"

                                />
                            }
                            labelPlacement="end"
                            label="Question count"
                            value={titleOptions.showQuestionCount}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <FormControlLabel
                            control={
                                <Switch
                                    id="show-question-pbar"
                                    name="show-question-pbar"
                                    color="secondary"


                                />
                            }
                            value={titleOptions.showProgressBar}
                            labelPlacement="end"
                            label="Progress bar"
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>);
};

const SurveyActionsPanel = ({ handler }) => {    
    const onClick = (action) => {     

        handler.onActionClick(action);
    };    
    return (
        <Paper variant='elevation' elevation={2} style={{marginTop:'20px',padding:'20px'}}>

            <Grid container direction='column' spacing={1} alignItems='stretch' alignContent='center' justify='center'>
                {/* <Grid item xs>
                    <Typography variant='h6'>
                        Survey Actions
                </Typography>
                </Grid> */}
                <Grid item xs>
                    <Button
                        fullWidth
                        color='primary'
                        variant='outlined'
                        onClick={()=>onClick("Save")}
                        startIcon={<SaveIcon></SaveIcon>}
                    >Save Survey
                  </Button>
                </Grid>
                <Grid item xs>
                    <Button      
                    fullWidth              
                        color='primary'
                        variant='outlined'
                        onClick={()=>onClick("PDFExport")}
                        startIcon={<SaveIcon></SaveIcon>}
                    >Export PDF
                  </Button>
                </Grid>
                <Grid item xs>
                    <Button
                    fullWidth
                        color='primary'
                        variant='outlined'
                        onClick={()=>onClick("Preview")}
                        startIcon={<VisibilityIcon></VisibilityIcon>}
                    >Preview
                  </Button>
                </Grid>
                <Grid item xs>
                    <Button
                    fullWidth
                        color='primary'
                        variant='outlined'
                        onClick={()=>onClick("Print")}
                        startIcon={<PrintIcon></PrintIcon>}
                    >Print
                  </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

const SurveyOptionsForm = ({handler}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    // const handler = {
    //     updateTitleOptions: (options) => { console.log(options); },
    //     updateSurveyOptions: (options) => { console.log(options); },
    // };
    return (
        <div>
            <Drawer
                variant="persistent"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left" open={open} onClose={() => setOpen(false)} >
                <SurveyOptionsPanel handler={handler} />
                <TitleOptionsPanel handler={handler}></TitleOptionsPanel>
                <SurveyActionsPanel handler={handler}></SurveyActionsPanel>
            </Drawer>
        </div>
    );
};

export default SurveyOptionsForm;