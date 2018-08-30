import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { styles } from './styles';
import SelectDay from './components/SelectDay/SelectDay';
import { connect } from 'react-redux';
import RoutineDay from './components/RoutineDay/RoutineDay';

const MyRoutine = ({ classes, nextIndex, prevIndex, days }) => {
    return (
        <React.Fragment>
            <SelectDay />
            <div className={classes.daysContainer}>
                {
                    days.map( ( day, index ) => 
                        day.selected && <RoutineDay day={day.name} key={index}/>
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
        </React.Fragment>
    );
};

const mapStateToProps = ({ routine }) => ({
    days: routine.days
});

MyRoutine.propTypes = {
    nextIndex: PropTypes.func,
    prevIndex: PropTypes.func,
};

export default connect( mapStateToProps )( withStyles( styles )( MyRoutine ) );