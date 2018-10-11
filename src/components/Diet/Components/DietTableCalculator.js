import React from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ActionDelete from '@material-ui/icons/Delete';

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
            className={props.classes.input}
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
            className={props.classes.input}
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
            <IconButton 
              onClick={handleOpenEliminationModal.bind( this, original )}
              color="secondary"
              aria-label="Delete"
            >
              <ActionDelete fontSize="small" />
            </IconButton>
          );
        },
        minWidth: 70,
        maxWidth: 100,
      },
    ];

  }

  finalColumns = centerColumns( finalColumns, props.classes );

  return(
    <div>
      <ReactTable
        data={selectedFoods}
        columns={[

          {
            Header: <Typography variant="subheading">MODIFICA LOS GRAMOS DE CADA UNO DE LOS ALIMENTOS SI ASÍ LO DESEAS</Typography>,
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


const centerColumns = ( columns, classes ) => {
  return columns.map( column => {
    return {
      ...column,
      className: `${classes.alignItemCenter} ${classes.justifyContentCenter}`
    };
  });
};

const styles = {
  input: { 
    width: '88px',
    margin: '0 5px 0 5px',
  },
  alignItemCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  justifyContentCenter: {
    display: 'flex',
    justifyContent: 'center',
  }
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
  
export default withStyles( styles )( DietTableCalculator );