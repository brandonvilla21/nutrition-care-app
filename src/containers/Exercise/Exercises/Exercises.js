import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PageBase from '../../../components/PageBase';
import { withStyles } from '@material-ui/core/styles';
import ContentAdd from '@material-ui/icons/Add';
import { Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ReactTable from 'react-table';

import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';

import filterCaseInsensitive from '../../../shared/tableFiltering';

import axios from '../../../axios';


const blue500 = blue['500'];
const blueGrey200 = blueGrey['200'];


const columns = [
  {
    Header: 'ID',
    accessor: 'id',
    maxWidth: 70
  },
  {
    Header: 'Nombre',
    accessor: 'name',
    minWidth: 120
  },
  {
    Header: 'Fecha de registro',
    accessor: 'createdAt',
    minWidth: 120
  },
];

const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 35,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: 1,
    backgroundColor: blue500,
  },
  editIconStyle: {
    color: blue500,
    borderRadius: '25px'
  },
  deleteIconStyle: {
    color: blueGrey200,
    borderRadius: '25px'
  },
  title: {
    fontSize: '32px',
    paddingBottom: '10px',
  }
};


class Exercises extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      exercises: [],
      openDeleteDialog: false,
      exerciseToDelete: {}
    };
  }

  componentDidMount() {
    this.getExercises().then( exercises => {
      exercises.forEach( exercise =>
        exercise.createdAt = new Date( exercise.createdAt ).toLocaleDateString()
      );
      this.setState({ exercises });
    });
  }

  getExercises() {

    const url = `Exercises`;

    return axios.get( url )
        .then( response => response.data )
        .catch( err => { throw err.response.data; });
  }

  render() {
    const { exercises } = this.state;
    const { classes, match } = this.props;

    return (
      <React.Fragment>
        <Typography className={classes.title} variant="headline">Ejercicios registrados</Typography>
        <Divider/>
        <PageBase>
        <div>
            <Button component={Link} to={`${match.url}/create`}
              variant="fab"
              color="primary"
              data-testid="create-exercise-button"
              className={classes.floatingActionButton}
              id="create-exercise-button"
              
            >
              <ContentAdd />
            </Button>
          <ReactTable
            className="-striped -highlight"
            data={exercises}
            filterable
            defaultFilterMethod={filterCaseInsensitive}
            columns={[
              ...columns,
            ]}
            defaultPageSize={10}
            noDataText="No hay datos registrados"
          />

        </div>
      </PageBase>
      </React.Fragment>
      
    );
  }
}
export default withStyles( styles )( Exercises );
