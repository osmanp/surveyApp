import React from 'react';
import {
    Card, Paper, Grid, CardHeader, CardContent, List, ListItem, ListItemText,
    IconButton,
    TableHead,
    Table,
    TableContainer,
    CardActions,
    Button,
    TableCell,
    TableRow,
    makeStyles,
    Typography
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
    },
    media: {
        height: 120,
    },
});

const TemplateCard = ({ survey }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title={survey.title.text} subheader={survey.title.description}>
            </CardHeader>
            <CardContent>

                <Table size="small" style={{width:'110%',margin:'-20px',marginRight:'-20px'}}>
                    {Object.keys(survey.attributes).map((element, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell align='left'>
                                    {element}
                                </TableCell>
                                <TableCell align='right'>
                                    {survey.attributes[element]}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </Table>
            </CardContent>
            <CardActions>
                <IconButton
                    color="secondary"
                    component="span">
                    <ShareIcon fontSize='small'></ShareIcon>
                    <Typography variant='body1' align='right' style={{ marginLeft: '4px' }}>
                        Share
                    </Typography>

                </IconButton>
                <IconButton
                    color="secondary"
                    component="span">
                    <EditIcon fontSize='small'></EditIcon>
                    <Typography variant='body1' align='right' style={{ marginLeft: '4px' }}>
                        Edit
                    </Typography>
                </IconButton>
                <IconButton
                    color="secondary"
                    component="span">
                    <VisibilityIcon fontSize='small'></VisibilityIcon>
                    <Typography variant='body1' align='right' style={{ marginLeft: '4px' }}>
                        Preview
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default TemplateCard;