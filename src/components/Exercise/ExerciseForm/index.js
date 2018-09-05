import React, { Component } from 'react/';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import axios from '../../../axios';

const initialState = {
  name: '',
  srcImage: '',
};

class ExerciseForm extends Component {
 
  state = initialState;

  submitExercise = exercise => {
    return axios.post( '/Exercises', exercise )
        .then( res => res.data ); 
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.submitExercise( this.state )
      .then( exercise => {
        if ( exercise.id ) {
          this.props.onSubmit( true );
          this.setState({ ...initialState });
        } else {
          this.props.onSubmit( false );
        }
      })
      .catch( err => this.props.onSubmit( false ) );
  };

  render() {

    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        
        <TextField
          name='name'
          label='Nombre'
          placeholder='Ingrese el nombre del ejercicio'
          margin='normal'
          fullWidth
          value={this.state.name}
          onChange={this.handleInput}
          type="text"
        />

        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            className={classes.button}
            color="primary"
            variant="contained"
            onClick={this.handleClick}
          >
            Registrar ejercicio
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles( styles, { withTheme: true })( ExerciseForm );
