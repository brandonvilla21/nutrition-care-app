import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import EditDietForm from '../../../components/Diet/EditDietForm';

class EditDiet extends Component {
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
              aria-labelledby="successful-edited-diet-modal"
              disableBackdropClick
              open={this.state.submitted}
              onClose={this.handleClose}>

                <DialogTitle 
                  data-testid="successful-edited-diet-modal"
                  id="successful-edited-diet-modal">
                  Dieta editada
                </DialogTitle>

                <DialogContent>
                  La dieta ha sido editada con éxito ;).
                </DialogContent>

                <DialogActions> {actions} </DialogActions>

            </Dialog>

            <Dialog
              aria-labelledby="edit-diet-error-modal"
              disableBackdropClick
              data-testid="edit-diet-error-modal"
              open={this.state.isThereAnError}
              onClose={this.handleClose}>

                <DialogTitle id="edit-diet-error-modal">
                  Aviso
                </DialogTitle>

                <DialogContent>
                  Hubo un error al editar la dieta. Intentalo más tarde :( <br/><br/>
                  Error: {this.state.errorMessage}
                </DialogContent>

                <DialogActions> {actions} </DialogActions>

            </Dialog>
          
            <EditDietForm onSubmitted={this.isSubmitted} />
        </div>
      );
    }
}

export default EditDiet;