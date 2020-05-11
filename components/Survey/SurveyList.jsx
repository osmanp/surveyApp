import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import VisibilityIcon from "@material-ui/icons/Visibility";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#41594F',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.grey[200],
        },
        '&:hover': {
            backgroundColor: "#b6becc",
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const SurveyList = ({ surveys }) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} style={{width:'1500px'}}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="center">Question Count</StyledTableCell>
                        <StyledTableCell align="center">Respondents</StyledTableCell>
                        <StyledTableCell align="center">Create Date</StyledTableCell>
                        <StyledTableCell align="center">Public</StyledTableCell>
                        <StyledTableCell align="center">Preview</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {surveys.map((survey) => (
                        <StyledTableRow key={survey.title.text}>
                            <StyledTableCell align="center">{survey.title.text}</StyledTableCell>
                            <StyledTableCell align="center">{survey.title.description}</StyledTableCell>
                            <StyledTableCell align="center">{survey.attributes.questionCount}</StyledTableCell>
                            <StyledTableCell align="center">{survey.attributes.respondentsCount}</StyledTableCell>
                            <StyledTableCell align="center">{survey.attributes.createDate}</StyledTableCell>
                            <StyledTableCell align="center">{survey.attributes.isPublic ? <CheckIcon color='green' /> : null}</StyledTableCell>
                            <StyledTableCell align="center">
                                <IconButton >
                                    <VisibilityIcon></VisibilityIcon>
                                </IconButton> </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SurveyList;