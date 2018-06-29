import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { styles } from './styles';
import SelectDay from './components/SelectDay/SelectDay';

const MyRoutine = ({ classes, nextIndex, prevIndex }) => {
    return (
        <div>
            <SelectDay />
            <div className={classes.buttonsContainer}>
                <Button
                    onClick={prevIndex}
                    variant="raised"
                    color="secondary">
                    Regresar
                </Button>
                <Button
                    onClick={nextIndex}
                    variant="raised"
                    color="primary">
                    Siguiente
                </Button>
            </div>
        </div>
    );
};

MyRoutine.propTypes = {
    nextIndex: PropTypes.func,
    prevIndex: PropTypes.func,
};

export default withStyles(styles)(MyRoutine);