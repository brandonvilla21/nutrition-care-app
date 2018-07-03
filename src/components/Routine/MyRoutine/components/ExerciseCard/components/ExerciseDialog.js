import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import FormDialog from './FormDialog';

const ExerciseDialog = ({ title, fullScreen, open, handleClose }) => {

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="exercise-dialog"
        >
          <DialogTitle id="exercise-dialog">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="subheading">
                Llene los datos del ejercicio
              </Typography>
              
              <FormDialog />

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Guardar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

ExerciseDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ExerciseDialog);
