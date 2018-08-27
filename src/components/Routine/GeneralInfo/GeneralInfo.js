import React from 'react';
import { Typography, TextField, Button, withStyles } from '@material-ui/core';
import { styles } from './styles';
import propTypes from './propTypes';
import { connect } from 'react-redux';
import { addDescription } from '../../../containers/Routine/store/actions/actions';

const GeneralInfo = ({ classes, description, addDescription, nextIndex }) => {
    return (
        <React.Fragment>
            <Typography variant="headline">
                Información acerca de la rutina
            </Typography>
            <TextField
                label="Ingrese una descripción de la rutina"
                placeholder="Descripción"
                multiline={true}
                margin="normal"
                fullWidth
                value={description}
                onChange={addDescription}
            />
            <div className={classes.buttonContainer}>
                <Button
                    onClick={nextIndex}
                    className={classes.button}
                    variant="raised"
                    color="primary">
                    Siguiente
                </Button>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = ({ routine }) => ({
    description: routine.description,
});

const mapDispatchToProps = {
    addDescription
};

GeneralInfo.propTypes = propTypes;

export default  connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( GeneralInfo ) );