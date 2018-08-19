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
import sendLoopbackParams from '../../../shared/sendLoopbackParams';


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
        Header: 'Fecha de registro',
        accessor: 'registerDate',
        minWidth: 120
      },
      {
        Header: 'Descripción',
        accessor: 'description',
        minWidth: 150,
        style: { whiteSpace: 'normal' }
      }
    ]
  },
  {
    Header: 'Totales',
    headerStyle: {
      fontSize: 16,
      fontStyle: 'italic',
      paddingBottom: 15
    },
    columns: [
      {
        Header: 'Carbohidratos',
        accessor: 'totalCarbohydrates',
        maxWidth: 120
      },
      {
        Header: 'Proteínas',
        accessor: 'totalProteins',
        maxWidth: 120
      },
      {
        Header: 'Grasas',
        accessor: 'totalFats',
        maxWidth: 120
      },
      {
        Header: 'Calorías',
        accessor: 'totalCalories',
        maxWidth: 120
      }
    ]
  }
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


class Diets extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      diets: [],
      openDeleteDialog: false,
      dietToDelete: {}
    };
  }

  componentDidMount() {
    this.getOwnDiets().then( diets => {
      diets.forEach( diet =>
        diet.registerDate = new Date( diet.createdAt ).toLocaleDateString()
      );
      this.setState({ diets });
    });
  }

  handleDeleteDietDialogClose() {
    this.setState({ openDeleteDialog: false, dietToDelete: {} });
  }

  handleDeleteDietDialogOpen( dietToDelete ) {
    this.setState({ openDeleteDialog: true, dietToDelete });
  }

  deleteDiet() {
    this.deleteDietFromAPI();
  }

  deleteDietFromArray() {
    let diets = [...this.state.diets];
    const index = diets.findIndex(
      element => element.id === this.state.dietToDelete.id
    );

    diets = [...diets.slice( 0, index ), ...diets.slice( index + 1 )];

    this.setState({ diets });
  }

  deleteDietFromAPI() {
    // const { dietToDelete } = this.state;
    // const url = `${urlConfig.baseUrl}/diets/setAsInactive/${dietToDelete.id}`;
    // const config = urlConfig.axiosConfig;
    // config.method = 'DELETE';

    // axios.delete(url, config)
    //     .then( response => {
    //       if (response.status === 200) {
    //         this.deleteDietFromArray();
    //         this.handleDeleteDietDialogClose();
    //         // console.log('response: ', response);
    //         }
    //     })
    //     .catch(err => {
    //       throw err.response.data.message;
    //     });
  }

  getOwnDiets() {
    const url = '/Diets';
    const config = sendLoopbackParams({ limit: 5 });

    return axios.get( url, config )
        .then( response => response.data )
        .catch( err => { throw err.response.data; });
  }

  render() {
    const { diets } = this.state;
    const { classes, match } = this.props;

    return (
      <PageBase>
        <div>
            <Button component={Link} to={`${match.url}/create`}
              variant="fab"
              color="primary"
              className={classes.floatingActionButton}
            >
              <ContentAdd />
            </Button>
          <ReactTable
            className="-striped -highlight"
            data={diets}
            filterable
            defaultFilterMethod={filterCaseInsensitive}
            columns={[
              ...columns,
              {
                // Header: "Editar",
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
                      onClick={this.handleDeleteDietDialogOpen.bind(
                        this,
                        original
                      )}
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
                onClick={this.handleDeleteDietDialogClose.bind( this )}
              />,

              <FlatButton
                label="Eliminar"
                secondary={true}
                key={0}
                onClick={this.deleteDiet.bind( this )}
              />
            ]}
            modal={true}
            open={this.state.openDeleteDialog}
          >
            ¿Estás seguro de eliminar esta dieta? Si lo haces, es muy probable
            que no puedas recuperarla más adelante.
          </Dialog> */}
        </div>
      </PageBase>
    );
  }
}
export default withStyles( styles )( Diets );
