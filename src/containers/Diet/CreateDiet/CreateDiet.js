import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import DietForm from '../../../components/Diet/DietForm';


class CreateDiet extends Component {
    constructor( props ) {
        super( props );
        this.state = {
          submitted: false,
          isThereAnError: false,
          errorMessage: ''
        };

        this.handleClose = this.handleClose.bind( this );
        this.isSubmitted = this.isSubmitted.bind( this );
    }

    
    handleClose() {
      this.setState({ 
        submitted: false,
        isThereAnError: false,
        errorMessage: ''
      });
    }

    isSubmitted({ submitted = false, err = false, errorMessage = '' }) {
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
        <Button key={1}
          color="primary"
          onClick={this.handleClose}>
            Registrar otra dieta
        </Button>
        ,
        <Button key={2} 
          component={Link} 
          to="/dashboard/diet"
          color="primary"
          onClick={this.handleClose}>
            Finalizar
        </Button>
      ];
     
      return (
        <div>
            <Dialog
              aria-labelledby="successful-created-diet-modal"
              disableBackdropClick
              open={this.state.submitted}
              onClose={this.handleClose}>

                <DialogTitle 
                  data-testid="successful-created-diet-modal"
                  id="successful-created-diet-modal">
                  Dieta registrada
                </DialogTitle>

                <DialogContent>
                  La dieta ha sido registrada con éxito.
                </DialogContent>

                <DialogActions> {actions} </DialogActions>

            </Dialog>

            <Dialog
              aria-labelledby="create-diet-error-modal"
              disableBackdropClick
              data-testid="create-diet-error-modal"
              open={this.state.isThereAnError}
              onClose={this.handleClose}>

                <DialogTitle id="create-diet-error-modal">
                  Aviso
                </DialogTitle>

                <DialogContent>
                  Hubo un error al registrar la dieta. Intentalo más tarde :( <br/><br/>
                  Error: {this.state.errorMessage}
                </DialogContent>

                <DialogActions> {actions} </DialogActions>

            </Dialog>
          
          <DietForm onSubmitted={this.isSubmitted} />
        </div>
      );
    }
}

export default CreateDiet;