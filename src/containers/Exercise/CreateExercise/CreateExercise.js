import React from 'react';
import PageBase from '../../../components/PageBase';
import ExerciseForm from '../../../components/Exercise/ExerciseForm';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

class CreateExercise extends React.Component {

    state = {
        submitted: false,
        isThereAnError: false,
        errorMessage: ''
    };

    
    handleClose = () => {
      this.setState({ 
        submitted: false,
        isThereAnError: false,
        errorMessage: ''
      });
    }

    isSubmitted = ({ submitted = false, err = false, errorMessage = '' }) => {
      if( err ) {
        this.setState({ 
          isThereAnError: err,
          submitted,
          errorMessage
         });
      } else {
        this.setState({ 
          isThereAnError: err,
          submitted,
          errorMessage,
         });
      }
    }

  render() {
    const actions = [
      <Button
        key={1}
        component={Link}
        to="/dashboard/exercise"
        color="primary"
        onClick={this.handleClose}
      >
        Finalizar
      </Button>
    ];

    return (
      <React.Fragment>
        <Dialog
          aria-labelledby="successful-created-exercise-modal"
          disableBackdropClick
          open={this.state.submitted}
          onClose={this.handleClose}
        >
          <DialogTitle
            data-testid="successful-created-exercise-modal"
            id="successful-created-exercise-modal"
          >
            Ejercicio registrado
          </DialogTitle>

          <DialogContent>El ejercicio ha sido registrado con éxito.</DialogContent>

          <DialogActions> {actions} </DialogActions>
        </Dialog>

        <Dialog
          aria-labelledby="create-exercise-error-modal"
          disableBackdropClick
          data-testid="create-exercise-error-modal"
          open={this.state.isThereAnError}
          onClose={this.handleClose}
        >
          <DialogTitle id="create-exercise-error-modal">Aviso</DialogTitle>

          <DialogContent>
            Hubo un error al registrar la ejercicio. Intentalo más tarde :( <br />
            <br />
            Error: {this.state.errorMessage}
          </DialogContent>

          <DialogActions> {actions} </DialogActions>
        </Dialog>

        <PageBase title="Registrar un nuevo ejercicio">
          <ExerciseForm onSubmit={this.isSubmitted} />
        </PageBase>
      </React.Fragment>
    );
  }
}

export default CreateExercise;
