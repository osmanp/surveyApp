
import { Divider, Grid, ListItemIcon, ListItemText, ListSubheader, MenuItem, Select, Typography } from '@material-ui/core';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ShortTextIcon from '@material-ui/icons/ShortText';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import TimerIcon from '@material-ui/icons/Timer';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import React from 'react';

const MenuCategory = (text, icon) => {
    return (
        <ListSubheader>
            <Typography variant='h6' align='left' color='secondary'>
                {text}
            </Typography>
            <Divider flexItem></Divider>
        </ListSubheader>
    );
};
const MenuItemTypo = (text, value, icon) => {
    return (
        <MenuItem value={value}>
            <Grid container direction='row' alignContent='stretch' justify='flex-start' alignItems='center'>
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

const QuestionTypeDropDown = ({ templateType, handleChangeType }) => {

    const initialState = templateType || 'short-answer';

    React.useEffect(() => {
        setValue(initialState);
    },[templateType]);

    const [value,setValue] = React.useState(templateType);
    const onChange = (event) => {
        setValue(event.target.value);
        handleChangeType(event.target.value);
    };
    return <Select id='select-type' value={value} fullWidth onChange={onChange}>
        {MenuCategory('Text')}
        {MenuItemTypo('Line Answer', 'short-answer', <ShortTextIcon></ShortTextIcon>)}
        {MenuItemTypo('Paragraph', 'long-answer', <ViewHeadlineIcon></ViewHeadlineIcon>)}
        {MenuCategory('Scale')}
        {MenuItemTypo('Radio', 'radio-slider', <RadioButtonCheckedIcon></RadioButtonCheckedIcon>)}
        {MenuItemTypo('Rating', 'rating-slider', <StarHalfIcon />)}
        {MenuItemTypo('Grid', 'grid-slider', <ViewModuleIcon></ViewModuleIcon>)}
        {MenuItemTypo('Lineer', 'lineer-slider', <LinearScaleIcon></LinearScaleIcon>)}
        {MenuCategory('Select')}
        {MenuItemTypo('Single', 'single-select-radio', <RadioButtonCheckedIcon></RadioButtonCheckedIcon>)}
        {MenuItemTypo('Multiple', 'single-select-checkbox', <CheckBoxIcon></CheckBoxIcon>)}
        {MenuItemTypo(
            'Dropdown',
            'single-select-dropdown',
            <ArrowDropDownCircleIcon></ArrowDropDownCircleIcon>
        )}
        {MenuCategory('Liken-style')}
        {MenuItemTypo('Single', 'liken-radio', <RadioButtonCheckedIcon></RadioButtonCheckedIcon>)}
        {MenuItemTypo('Multi', 'liken-checkbox', <CheckBoxIcon></CheckBoxIcon>)}
        {MenuCategory('Date - Time')}
        {MenuItemTypo('Date', 'date', <CalendarTodayIcon></CalendarTodayIcon>)}
        {MenuItemTypo('Time', 'time', <TimerIcon></TimerIcon>)}
    </Select>;
};

export default QuestionTypeDropDown;