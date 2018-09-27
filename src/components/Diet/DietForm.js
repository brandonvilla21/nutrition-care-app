import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageBase from '../PageBase';
import TabsDiet from './Components/TabsDiet';
import Typography from '@material-ui/core/Typography';

import debounce from 'lodash.debounce';

import { 
  handleChange, onRecalculateTotals, toggleRow,
  onChangeDataTableFields, calculateDataTableData,
} from './diet-utils';

import axios from '../../axios';


class DietForm extends Component {

    constructor( props ) {
        super( props );
        this.state = {
          foods: [],
          selectedFoods: [],
          totalCarbohydrates: 0,
          totalProteins: 0,
          totalFats: 0,
          totalCalories: 0,
          description: ''
        };
        
        this.onRecalculateTotals = debounce( onRecalculateTotals.bind( this ), 500 );
        this.calculateDataTableData = debounce( calculateDataTableData.bind( this ), 500 );
        this.handleChange = handleChange.bind( this );
        this.toggleRow = toggleRow.bind( this );
        this.onChangeDataTableFields = onChangeDataTableFields.bind( this );
        this.onSubmitDiet = this.onSubmitDiet.bind( this );
    }


    componentDidMount() {
      this.getFoods().then( foods => this.setState({ foods }) );
    }


    componentDidUpdate( prevProps, prevState ) {
      if ( this.state.selectedFoods !== prevState.selectedFoods )
        this.onRecalculateTotals();
      
    }

  /**
   * 
   * Gathers and sends all the the proper data to handle the create concerns for
   * the diet and its selected foods.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param resetIndex - A callback to reset the Tabs' index when needed.
   */
    onSubmitDiet( resetIndex ) {

      const url = '/Diets/fullDietRegistration';

      const userId = localStorage.getItem( 'NC_userId' );

      const { 
        totalCarbohydrates, totalProteins, totalFats,
        totalCalories, description,
      } = this.state;
      
      const selectedFoods = [ ...this.state.selectedFoods ].map( food => {
        return { 
          food_id: food.id,
          calories: food.calories,
          carbohydrates: food.carbohydrates,
          fats: food.fats,
          proteins: food.proteins,
          desiredGrams: food.desiredGrams,
          description: food.description,
        };
      });
        
      const data = { 
        totalCarbohydrates, totalProteins, totalFats,
        totalCalories, description,
        customerId: userId,
      };

      axios.post( url, { diet: data, dietDetails: selectedFoods })
        .then( response => {
          if ( response.status === 200 ) {
                this.props.onSubmitted({ submitted: true, err: false });
                this.resetState();
                resetIndex();
            } else 
              this.props.onSubmitted({ submitted: false, err: true });
            
        })
        .catch( err => {
          this.props.onSubmitted({ 
            submitted: false, 
            err: true, 
            errorMessage: err.response,
          });
        });
    }

  /**
   * 
   * Get all the current foods from the API and prepares them
   * properly for the DietForm component.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   */
    getFoods() {

        const url = 'Foods';

        return axios.get( url )
          .then( response => response.data )
          .then( foods => foods.map( food => {
            return {
              ...food,
              desiredGrams: 1,
              desiredProteins: food.proteins,
              desiredFats: food.fats,
              desiredCarbohydrates: food.carbohydrates,
              desiredCalories:food.calories,
            };
          }) )
          .catch( err => { throw err.response.data; });

    }

    /**
     * 
     * Reset the component state.
     * @author Marcos Barrera del Río <elyomarcos@gmail.com>
     */
    resetState() {

      this.setState({
        selectedFoods: [],
        totalCarbohydrates: 0,
        totalProteins: 0,
        totalFats: 0,
        totalCalories: 0,
        description: ''
      });

    }


    render() {
        const { 
          foods, selectedFoods, totalCalories, 
          totalCarbohydrates, totalFats, totalProteins,
          description,
        } = this.state;

        return(
            <PageBase>

              <div>
                <Typography
                  style={{ 
                    margin: '15px 0 35px 0',
                    textAlign: 'center',
                  }} 
                  variant="headline" 
                  component="h4"
                >
                  Registrar una dieta
                </Typography>

                <TabsDiet 
                  foods={foods}
                  selectedFoods={selectedFoods}
                  totalCalories={totalCalories}
                  totalCarbohydrates={totalCarbohydrates}
                  totalFats={totalFats}
                  totalProteins={totalProteins}
                  selectableFoodColumns={selectableFoodColumns}
                  toggleRow={this.toggleRow}
                  description={description}
                  onChangeDataTableFields={this.onChangeDataTableFields}
                  onSubmitDiet={this.onSubmitDiet}
                  onChange={this.handleChange}
                />
              </div>

            </PageBase>
        );
    }
}
DietForm.propTypes = {
    onSubmitted: PropTypes.func
};

const selectableFoodColumns = [
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
    Header: 'Proteínas por g.',
    accessor: 'proteins',
    maxWidth: 150    
    
  },
  {
    Header: 'Carbohídratos por g.',
    accessor: 'carbohydrates',
    maxWidth: 150    
  },
  {
    Header: 'Grasas por g.',
    accessor: 'fats',
    maxWidth: 150    
  },
  {
    Header: 'Calorías por g.',
    accessor: 'calories',
    maxWidth: 150    
  }
];

export default DietForm;