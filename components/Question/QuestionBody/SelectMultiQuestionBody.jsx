import {
  makeStyles,
  Radio,
  Checkbox,
  FormControl,
  FormControlLabel,
  Paper,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
  Container,
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles'
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const StyledTableCell = withStyles((theme) => ({
  root: {
    '&:hover':{
      backgroundColor: "#b6becc",
    }
  },
}))(TableCell);

const subColumns = (length, allowMultiple) => {
  if (allowMultiple) {
    return Array.from(Array(length).keys()).map((element, index) => {
      return <StyledTableCell component={Checkbox} size='medium'  padding='checkbox'></StyledTableCell>;
    });
  } else {
    return Array.from(Array(length).keys()).map((element, index) => {
      return <StyledTableCell component={Radio} size='medium' padding='checkbox'></StyledTableCell>;
    });
  }
};

const SelectMultiQuestionBody = ({ body }) => {
  const classes = useStyles();
  return (
  
    <TableContainer style={{ maxWidth: "850px", maxHeight: "100%" }}>
      <TableHead>
        <TableCell component={Typography}></TableCell>
        {body.columns.map((element, index) => {
          return (
            <TableCell key={element.value} component={Typography}>
              {element.label}
            </TableCell>
          );
        })}
      </TableHead>
      <TableBody>
        {body.rows.map((element, index) => {
          return (
            <TableRow key={element.id}>
              <StyledTableCell component={Typography}>{element.label}</StyledTableCell>
              {subColumns(body.columns.length, body.allowMultiple)}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

SelectMultiQuestionBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.object),
};

export default SelectMultiQuestionBody;
