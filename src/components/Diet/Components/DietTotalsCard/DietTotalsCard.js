import React, { Component } from 'react';
import PropTypes from 'prop-types';

import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import TextField from '@material-ui/core/TextField';
import './DietTotalsCard.scss';
import { Card, CardContent, withStyles, CardHeader } from '@material-ui/core';

const grey700 = grey['700'];
const blue500 = blue['500'];
const indigo50 = indigo['50'];

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
    marginBottom: '10px',
    marginTop: '10px',
    padding: '10px'

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