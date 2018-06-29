import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { styles } from './styles';
import SelectDay from './components/SelectDay/SelectDay';
import { connect } from 'react-redux';
import RoutineDay from './components/RoutineDay/RoutineDay';

const MyRoutine = ({ classes, nextIndex, prevIndex, days }) => {
    return (
        <div>
            <SelectDay />
            <div className={classes.daysContainer}>
                {
                    days.map(( day, index ) => 
                        <RoutineDay key={index}/>
                    )
                }
            </div>
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
const mapStateToProps = state => ({
    days: state.days
});

MyRoutine.propTypes = {
    nextIndex: PropTypes.func,
    prevIndex: PropTypes.func,
};

export default connect(mapStateToProps)(withStyles(styles)(MyRoutine));