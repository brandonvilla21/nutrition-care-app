import React from 'react';
import {
  Typography,
  TableRow,
  TableCell,
  withStyles
} from '@material-ui/core';

const styles = () => ({
  image: {
    maxWidth: '200px'
  },
});

const RoutineDayResume = ({ classes, name, exercises }) => {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="routine">
            <Typography variant="display1">
              {name}
            </Typography>
        </TableCell>
        <TableCell />
        <TableCell />
        <TableCell />
        <TableCell />
      </TableRow>
      {
        exercises.map( ( exerciseData, index ) => {
          const { description, reps, series } = exerciseData;
          const { name, imageName } = exerciseData.exercise;
          return (
            <TableRow key={index}>
              <TableCell style={{ width: '100px' }} component="th" scope="routine">
                  <img className={classes.image} src={`${process.env.REACT_APP_IMAGE_ENTRY_POINT}/${imageName}`} alt="here-is-your-alt-eslint"></img>
              </TableCell>
              <TableCell>
                  {name}
              </TableCell>
              <TableCell>
                  {description}
              </TableCell>
              <TableCell>
                  {series}
              </TableCell>
              <TableCell>
                  {reps}
              </TableCell>
            </TableRow>
          );
        })
      }
    </React.Fragment>
  );
};

export default withStyles( styles )( RoutineDayResume );