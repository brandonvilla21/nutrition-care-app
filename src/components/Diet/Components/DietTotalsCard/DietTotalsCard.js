import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { Card, CardContent, withStyles, CardHeader } from '@material-ui/core';


class DietTotalsCard extends Component {

    constructor( props ) {
        super( props );
    }


    componentWillMount() { }


    render() {

      const { 
        totalCalories, 
        totalCarbohydrates, 
        totalFats, 
        totalProteins, 
        classes 
      } = this.props;
      
      return(

          <Card className={classes.card}>
          <CardHeader 
            title="Totales"
            subheader="Total de macronutrientes y calorías en la dieta"
            />
            <CardContent className={classes.flexContainer}>
              
              <TextField 
                name="totalProteins"
                label="Proteínas"
                readOnly
                value={totalProteins}
              />

              <TextField
                name="totalCarbohydrates"
                label="Carbohidratos"
                readOnly
                value={totalCarbohydrates}
              />

              <TextField
                name="totalFats"
                label="Grasas"
                readOnly
                value={totalFats}
              />

              <TextField
                name="totalCalories"
                label="Calorías"
                readOnly
                value={totalCalories}
              />

            </CardContent>

              
          </Card>
            

        );
    }
}

DietTotalsCard.propTypes = {
  totalCalories: PropTypes.number.isRequired,
  totalCarbohydrates: PropTypes.number.isRequired,
  totalFats: PropTypes.number.isRequired,
  totalProteins: PropTypes.number.isRequired,
};

const styles = {
  card: {
    boxSizing: 'border-box',
    marginBottom: '7px',
    marginTop: '7px',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& div': {
      margin: '10px',
    }
  },
  textField: {
    margin: '10px'
  }
};

export default withStyles( styles )( DietTotalsCard );