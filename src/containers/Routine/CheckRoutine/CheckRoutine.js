import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  Typography,
  TableRow,
  TableCell,
  withStyles,
} from '@material-ui/core';
import RoutineDayResume from '../../../components/Routine/RoutineDayResume/RoutineDayResume';
import { getRoutineById } from '../routine.service';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  description: {
    padding: theme.spacing.unit * 3
  },
  table: {
    minWidth: 700,
  },
});

class CheckRoutine extends React.Component {
  state = {
    description: '',
    routine: {}
  };

  componentDidMount() {
    this.populateRoutineData();
  }
  populateRoutineData = () => {
    const { id } = this.props.match.params;
    getRoutineById( id )
      .then( res => res.data )
      .then( data => {
        this.setState({
          description: data.description,
          routine: this.mapRoutine( data.exerciseRoutineDetails )
        });
      })
      .catch( err => { throw err; });
  }

  mapRoutine = exerciseRoutineDetails => {
    return exerciseRoutineDetails.reduce( ( routine, item ) => {
      const prevExercises = routine[item.day] || {}; // To avoid spread over undefined
      return {
        ...routine,
        [item.day]: [
          ...prevExercises,
          item
        ]
      };
    }, {});
  }

  render() {
    const { classes } = this.props;
    const { description, routine } = this.state;
    return (
      <div>
        <Paper className={classes.description}>
          <Typography variant="headline">
            {description}
          </Typography>
        </Paper>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell><strong>Ejercicio</strong></TableCell>
                <TableCell><strong>Descripción</strong></TableCell>
                <TableCell><strong>Series</strong></TableCell>
                <TableCell><strong>Repeticiones</strong></TableCell>
              </TableRow>
              {
                Object.keys( routine ).map( ( key, index ) => {
                  return (
                    <RoutineDayResume
                      key={index}
                      name={key}
                      exercises={routine[key]}
                    />
                  );
                }) 
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles( styles )( CheckRoutine );