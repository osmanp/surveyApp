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

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:hover':{
      backgroundColor: "#b6becc",
    }
  },
}))(TableRow);

const subColumns = (length, allowMultiple) => {
  if (allowMultiple) {
    return Array.from(Array(length).keys()).map((element, index) => {
      return <TableCell component={Checkbox} size='medium'  padding='checkbox'></TableCell>;
    });
  } else {
    return Array.from(Array(length).keys()).map((element, index) => {
      return <TableCell component={Radio} size='medium' padding='checkbox'></TableCell>;
    });
  }
};

const SelectMultiQuestionBody = ({ body }) => {
  const classes = useStyles();
  return (
    <TableContainer style={{ maxWidth: "100%", maxHeight: "100%" ,marginTop:'-50px'}}>
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
            <StyledTableRow key={element.id}>
              <TableCell component={Typography}>{element.label}</TableCell>
              {subColumns(body.columns.length, body.allowMultiple)}
            </StyledTableRow>
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
