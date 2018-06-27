import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button, withStyles } from '@material-ui/core';

const GeneralInfo = ({ classes, description, handleInput }) => {
    return (
        <div>
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
                onChange={handleInput}
            />
            <div className={classes.buttonContainer}>
                <Button variant="raised" color="primary" className={classes.button}>
                    Siguiente
                </Button>
            </div>
        </div>
    );
};

const styles = theme => ({
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    button: {
        margin: theme.spacing.unit,
    }
});

GeneralInfo.propTypes = {
    description: PropTypes.string,
    handleInput: PropTypes.func,
    nextIndex: PropTypes.func
};

export default withStyles(styles)(GeneralInfo);