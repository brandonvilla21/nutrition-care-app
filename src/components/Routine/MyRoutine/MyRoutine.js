import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { styles } from './styles';
import SelectDay from './components/SelectDay/SelectDay';
import { connect } from 'react-redux';
import RoutineDay from './components/RoutineDay/RoutineDay';
import Container from '../../shared/Container/Container';
import {
    setDayForNewExercise,
    addExercises
} from '../../../containers/Routine/store/actions/actions';
import ExerciseModal from '../ExerciseModal';

class MyRoutine extends React.Component {
    state = { open: false };

    handleModal = day =>
        this.setState( () => {
            this.props.setDayForNewExercise( day );
            return { open: true };
        })
    
    // TODO: call method from props to handle further operations
    handleSave = exercises => {
        this.props.addExercises( exercises );
        this.setState( () => ({ open: false }) );
    }
    handleClose = () => this.setState( () => ({ open: false }) )

    render() {
        const {
            classes,
            prevIndex,
            nextIndex,
            days,
        } = this.props;

        return (
            <React.Fragment>
                <ExerciseModal
                    open={this.state.open}
                    onSave={this.handleSave}
                    onClose={this.handleClose}
                />
                <SelectDay />
                <Container className={classes.daysContainer}>
                    {
                        days.map( ( day, index ) => 
                            day.selected &&
                            <RoutineDay key={index} day={day.name} onNewExercice={this.handleModal}/>
                        )
                    }
                </Container>
                <Container className={classes.buttonsContainer}>
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
                </Container>
            </React.Fragment>
        );

    }
};

const mapStateToProps = ({ routine }) => ({
    days: routine.days
});

const mapDispatchToProps = ({
    setDayForNewExercise,
    addExercises
});

MyRoutine.propTypes = {
    nextIndex: PropTypes.func,
    prevIndex: PropTypes.func,
};

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( MyRoutine ) );