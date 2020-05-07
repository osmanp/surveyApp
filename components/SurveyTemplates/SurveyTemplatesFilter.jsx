import React from 'react';
import Categories from '../../data/categories';
import { Divider, Drawer, makeStyles, Grid, Typography, Paper, TextField, FormControlLabel, FormControl, Checkbox, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import _ from 'lodash';

const drawerWidth = '280px';

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
        paddingTop: '60px'
    },
    formControl: {
        margin: 1,
        minWidth: 120,
    },
    category: {
        "&:hover": {
            backgroundColor: "#b6becc",
        }
    },
    rating: {
        paddingTop:'9px',
        marginLeft:'-9px',
        "&:hover": {
            backgroundColor: "#b6becc",
        }
    }
});

const SelectRating = ({values,handleSelectCategory}) => {
    const classes = useStyles();
    const [category,setCategory] = React.useState(values);
    
    const handleChange = (index) => {        
        const newCategory = Array.from(category);
        if(!~newCategory.indexOf(index)){
            newCategory.push(index);
        }
        else {
            newCategory.splice(newCategory.indexOf(index),1);
        }
        setCategory(newCategory);
        handleSelectCategory(newCategory);        
    };

    React.useEffect(() => {
        setCategory(values);
    },[values]);

    return (
        <FormControl>
            {
                Array.from(Array(5).keys()).map((element, index) => {
                    return <Grid
                        key={element}
                        container direction='row' justify='space-between' alignContent='stretch' alignItems='stretch'
                        spacing={1}>
                        <Grid item xs >
                            <FormControlLabel
                                control={<Checkbox checked={~category.indexOf(index)} onChange={()=> handleChange(index)} ></Checkbox>}
                                key={element}                                
                                className={classes.category}
                            >

                            </FormControlLabel>
                        </Grid>
                        <Grid item xs>
                            <Rating className={classes.rating} readOnly={true} value={5 - element} ></Rating>
                        </Grid>
                    </Grid>;
                })
            }

        </FormControl>
    );
};

const SelectCategory = ({values,handleSelectCategory}) => {
    const classes = useStyles();
    const [category,setCategory] = React.useState(values);
    
    const handleChange = (index) => {        
        const newCategory = Array.from(category);
        if(!~newCategory.indexOf(index)){
            newCategory.push(index);
        }
        else {
            newCategory.splice(newCategory.indexOf(index),1);
        }
        setCategory(newCategory);
        handleSelectCategory(newCategory);        
    };

    React.useEffect(() => {
        setCategory(values);
    },[values]);

    return (        
        <FormControl>
            {
                Categories.map((element, index) => {
                    return <FormControlLabel
                        control={<Checkbox checked={~category.indexOf(element.id)} onChange={()=> handleChange(element.id)} ></Checkbox>}
                        label={element.name}
                        key={element.id}
                        className={classes.category}
                    >
                    </FormControlLabel>;
                })
            }
        </FormControl>        
    );
};

const Search = ({value,handleSearch}) => {
    const [searchValue,setSearchValue] = React.useState(value);
    React.useEffect(() => {
        setSearchValue(value);
    },[value]);
    return (
        <Grid container direction='column' alignItems='flex-start' alignContent='flex-start' justify='center'>
            <Grid item xs>
                <TextField
                id="search" 
                label='Search'
                variant="outlined" fullWidth 
                value={searchValue}
                onChange={(event) => {setSearchValue(event.target.value); handleSearch(event.target.value);}}/>
            </Grid>
        </Grid>
    );
};

const SurveyTemplatesFilter = ({handlers}) => {
    
    const initialFilter = {
        search:"",
        category:[],
        ratings:[]
    };

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [searchValue,setSearchValue] = React.useState("");
    const [categories,setCategories] = React.useState([]);
    const [ratings,setRatings] = React.useState([]);
    const handleClear = () => {
        setSearchValue(" ");
        setCategories([]);
        setRatings([]);
    };
    const handleSearch = (searchValue) => {
        
    };
    const handleSelectCategory = (categories) => {
        setCategories(categories);
    };
    const handleSelectRatings = (ratings) => {
        setRatings(ratings);
    };
    return (
        <Drawer
            variant="persistent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left" open={open} onClose={() => setOpen(false)} >

            <Grid container direction='row' spacing={4} style={{ width: '100%', marginTop: '20px', paddingLeft: '20px' }}>
                <Grid item xs={12}>
                    <Search value={searchValue} handleSearch={handleSearch}></Search>
                </Grid>
                <Grid item xs>
                    <Divider></Divider>
                </Grid>
                <Grid item xs={12}>
                    <SelectCategory values={categories} handleSelectCategory={handleSelectCategory}></SelectCategory>
                </Grid>
                <Grid item xs>
                    <Divider></Divider>
                </Grid>
                <Grid item xs={12}>
                    <SelectRating values={ratings} handleSelectCategory={handleSelectRatings}></SelectRating>
                </Grid>
                <Grid item xs>
                    <Divider></Divider>
                </Grid>
                <Grid item container xs={12} >
                    <Grid item xs>
                    <Button variant='outlined' color='secondary' onClick={handleClear}>
                       Clear 
                    </Button>
                    </Grid>
                    <Grid item xs>
                    <Button variant='outlined' color='secondary' onClick={handleSearch}>
                       Search 
                    </Button>
                    </Grid>
                                    
                </Grid>
            </Grid>
        </Drawer>
    );
};

export default SurveyTemplatesFilter;