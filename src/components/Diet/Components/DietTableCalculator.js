import React from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const DietTableCalculator = ( props ) => {

  const { 
    onChangeTable, selectedFoods,
    handleOpenEliminationModal, onEdit,
    } = props;

  //Just for edit porpuses.
  let finalColumns = [
    ...selectedFoodColumns,
    {
      Header: 'Gramos',
      id: 'text',
      accessor: '',
      filterable: false,
      sortable: false,
      Cell: ({ original }) => {
        return (
          <input
            data-testid={`input-grams`}
            style={styles.input}
            min="1.0"
            step="any"
            type="number"
            value={original[EDITABLE_PROPERTY_ACCESORS.GRAMS]}
            onChange={onChangeTable.bind( this, original, EDITABLE_PROPERTY_ACCESORS.GRAMS )}
          />
        );
      },
      maxWidth: 100
    },
    {
      Header: 'Calorías',
      id: 'text',
      accessor: '',
      filterable: false,
      maxWidth: 100,
      sortable: false,
      Cell: ({ original }) => {
        return (
          <input
            data-testid={`input-calories`}
            style={styles.input}
            min="1.0"
            step="any"
            type="number"
            value={original[EDITABLE_PROPERTY_ACCESORS.CALORIES]}
            onChange={onChangeTable.bind( this, original, EDITABLE_PROPERTY_ACCESORS.CALORIES )}
          />
        );
      },
    },
  ];

  if( onEdit === true ) {

    finalColumns = [
      ...finalColumns,
      {
        Header: 'Eliminar',
        id: 'text',
        accessor: '',
        filterable: false,
        sortable: false,
        Cell: ({ original }) => {
          return (
            <Button
              variant="contained"
              color="secondary"
              // disabled={this.disableCalculateDietButton()}
              onClick={handleOpenEliminationModal.bind( this, original )}>

              X

            </Button>
          );
        },
        minWidth: 70,
        maxWidth: 100,
      },
    ];

  }

  return(
    <div>
      <ReactTable
        data={selectedFoods}
        columns={[

          {
            Header: <Typography variant="subheading">INTRODUCE LOS GRAMOS DE CADA UNO DE LOS ALIMENTOS QUE SELECCIONASTE</Typography>,
            columns: [
              ...finalColumns
            ]
          },
        ]}
        defaultPageSize={6}
        noDataText="SELECCIONA LOS ALIMENTOS EN LA TABLA ANTERIOR PARA CONTINUAR ;)"
      />
    </div>
  );
};

DietTableCalculator.propTypes = {
  handleOpenEliminationModal: PropTypes.func,
  onChangeTable: PropTypes.func.isRequired,
  selectedFoods: PropTypes.array.isRequired,
  onEdit:        PropTypes.bool,
};

const styles = {
  input: { 
    width: '88px',
    margin: '0 5px 0 5px',
  },
};

const selectedFoodColumns = [
  {
    Header: 'ID',
    accessor: 'id',
    maxWidth: 100
  },
  {
    Header: 'Descripción',
    accessor: 'description',
    style: { whiteSpace: 'normal' }
  },
  {
    Header: 'Proteínas',
    accessor: 'desiredProteins',
    maxWidth: 100    
    
  },
  {
    Header: 'Carbohídratos',
    accessor: 'desiredCarbohydrates',
    maxWidth: 115    
  },
  {
    Header: 'Grasas',
    accessor: 'desiredFats',
    maxWidth: 100    
  }
];

const EDITABLE_PROPERTY_ACCESORS = {
  GRAMS: 'desiredGrams',
  CALORIES: 'desiredCalories'
};
  
export default DietTableCalculator;