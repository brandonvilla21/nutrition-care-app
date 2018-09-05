import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PageBase from '../../../components/PageBase';
import { withStyles } from '@material-ui/core/styles';
import ContentAdd from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import EditorModeEdit from '@material-ui/icons/ModeEdit';
import ActionDelete from '@material-ui/icons/Delete';

import ReactTable from 'react-table';

import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';

import filterCaseInsensitive from '../../../shared/tableFiltering';

import axios from '../../../axios';


const blue500 = blue['500'];
const blueGrey200 = blueGrey['200'];


const columns = [
  {
    Header: 'Información general',
    headerStyle: {
      fontSize: 16,
      fontStyle: 'italic',
      paddingBottom: 15
    },
    columns: [
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
    ]
  },
  // {
  //   // Header: 'Totales',
  //   // headerStyle: {
  //   //   fontSize: 16,
  //   //   fontStyle: 'italic',
  //   //   paddingBottom: 15
  //   // },
  //   filterable: false,
  //   columns: [
  //     {
  //       Header: 'Imagen',
  //       accessor: 'srcImage',
  //       minWidth: 120
  //     }
  //   ]
  // }
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

  // handleDeleteExerciseDialogClose() {
  //   this.setState({ openDeleteDialog: false, exerciseToDelete: {} });
  // }

  // handleDeleteExerciseDialogOpen( exerciseToDelete ) {
  //   this.setState({ openDeleteDialog: true, exerciseToDelete });
  // }

  // deleteExercise() {
  //   this.deleteExerciseFromAPI();
  // }

  // deleteExerciseFromArray() {
  //   let exercises = [...this.state.exercises];
  //   const index = exercises.findIndex(
  //     element => element.id === this.state.exerciseToDelete.id
  //   );

  //   exercises = [...exercises.slice( 0, index ), ...exercises.slice( index + 1 )];

  //   this.setState({ exercises });
  // }

  // deleteExerciseFromAPI() {
    // const { exerciseToDelete } = this.state;
    // const url = `${urlConfig.baseUrl}/exercises/setAsInactive/${exerciseToDelete.id}`;
    // const config = urlConfig.axiosConfig;
    // config.method = 'DELETE';

    // axios.delete(url, config)
    //     .then( response => {
    //       if (response.status === 200) {
    //         this.deleteExerciseFromArray();
    //         this.handleDeleteExerciseDialogClose();
    //         // console.log('response: ', response);
    //         }
    //     })
    //     .catch(err => {
    //       throw err.response.data.message;
    //     });
  // }

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
              {
                // Header: 'Editar',
                id: 'text',
                accessor: '',
                filterable: false,
                sortable: false,
                Cell: ({ original }) => {
                  return (
                    <Link to={`${match.url}/edit/${original.id}`}>
                      <IconButton 
                      color="secondary" className={classes.editIconStyle}
                      // iconStyle={styles.editIconStyle}
                      >
                        <EditorModeEdit />
                      </IconButton>
                    </Link>
                  );
                },
                maxWidth: 70
              },
              {
                Header: '',
                id: 'text',
                accessor: '',
                filterable: false,
                sortable: false,
                Cell: ({ original }) => {
                  return (
                    <IconButton
                      // onClick={this.handleDeleteExerciseDialogOpen.bind(
                      //   this,
                      //   original
                      // )}
                      className={classes.deleteIconStyle}
                      // iconStyle={styles.deleteIconStyle}
                    >
                      <ActionDelete />
                    </IconButton>
                  );
                },
                maxWidth: 70
              }
            ]}
            defaultPageSize={10}
            noDataText="No hay datos registrados"
          />

          {/* <Dialog
            title="AVISO"
            actions={[
              <RaisedButton
                label="Cancelar"
                secondary={true}
                key={1}
                onClick={this.handleDeleteExerciseDialogClose.bind( this )}
              />,

              <FlatButton
                label="Eliminar"
                secondary={true}
                key={0}
                onClick={this.deleteExercise.bind( this )}
              />
            ]}
            modal={true}
            open={this.state.openDeleteDialog}
          >
            ¿Estás seguro de eliminar esta exercisea? Si lo haces, es muy probable
            que no puedas recuperarla más adelante.
          </Dialog> */}
        </div>
      </PageBase>
    );
  }
}
export default withStyles( styles )( Exercises );
