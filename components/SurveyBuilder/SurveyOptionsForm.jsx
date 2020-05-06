import {
    Drawer, Grid, makeStyles, FormControlLabel, Select,
    MenuItem, Divider, FormControl, Switch, Typography, InputLabel, Paper, TextField, InputAdornment, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SaveIcon from "@material-ui/icons/Save";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React from 'react';
import { TwitterPicker } from 'react-color';
const drawerWidth = '400px';
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
    },
    drawer: {
        width: '100%',
        flexShrink: 0,
        overflow: 'auto',
        overflowY: 'unset'
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex: 0,
        paddingTop:'60px'
    },
    formControl: {
        margin: 1,
        minWidth: 120,
    }
});

const GetSurveyOptions = () => {
    const classes = useStyles();
    return (<ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography variant='h6' align='center'>
                <u>Survey Options</u>
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid container direction='row'>
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
                                id="select"
                                value={'Default'}
                                style={{ minWidth: '100%' }}
                                fullWidth
                                label='Theme'
                                variant='outlined'
                            >
                                <MenuItem value={"Default"}>Default</MenuItem>
                                <MenuItem value={"Formal"}>Formal</MenuItem>
                                <MenuItem value={"Business"}>Formal</MenuItem>
                                <MenuItem value={"Education"}>Formal</MenuItem>

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
                        <TwitterPicker triangle='hide' />
                    </Grid>
                </Grid>
            </Grid>
        </ExpansionPanelDetails>
    </ExpansionPanel>);
};
const GetTitleOptions = () => {
    return (<ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
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
                                checked={false}
                                name="show-estimated-time"
                                color="secondary"
                            />
                        }
                        labelPlacement="end"
                        label="Show estimated time"
                    />
                    <TextField
                        id="estimated-time"
                        type="number"
                        variant="standard"
                        style={{ maxWidth: "40%" }}
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
                    />
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
                        label="Show question count"
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
                        labelPlacement="end"
                        label="Show progress bar"
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
                        labelPlacement="end"
                        label="Auto pagination"
                    />
                      <TextField
                        id="estimated-time"
                        type="number"
                        variant="standard"
                        style={{ maxWidth: "40%" }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    Per 
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">Page</InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </ExpansionPanelDetails>
    </ExpansionPanel>);
};

const SurveyOptionsForm = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    return (
        <div>
            <Drawer
                variant="persistent"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right" open={open} onClose={() => setOpen(false)} >
                {GetSurveyOptions()}
                {GetTitleOptions()}
                {/* <Grid container direction='row' spacing={4} style={{ width: '100%', marginTop: '20px', paddingLeft: '20px' }}>
                    <Grid item xs={12}>
                        {GetSurveyOptions()}
                    </Grid>

                    <Grid item xs={12}>
                        {GetTitleOptions()}
                    </Grid>
                    <Grid item xs>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' align='center'>
                            Survey Options
                                </Typography>
                    </Grid>
                    <Grid item xs>
                        <Divider></Divider>
                    </Grid>
                </Grid> */}
            </Drawer>
        </div>
    );
};

export default SurveyOptionsForm;