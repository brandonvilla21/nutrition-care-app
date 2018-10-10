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
    addExercises,
    updateExerciseInRoutine,
    removeDayFromRoutine
} from '../../../containers/Routine/store/actions/actions';
import ExerciseModal from '../ExerciseModal';
import EditExerciseDialog from './components/EditExerciseDialog/EditExerciseDialog';

class MyRoutine extends React.Component {
    state = {
        exerciseModal: false,
        editExerciseModal: false,
        dayToEdit: '',
        exerciseToEdit: {
            id: null,
            name: '',
            imageName: '',
            description: '',
            series: '',
            reps: ''
        },
    };

    handleModal = day =>
        this.setState( () => {
            this.props.setDayForNewExercise( day );
            return { exerciseModal: true };
        })
    handleInputModalChange = event => {
        event.persist();
        this.setState( prevState => ({
            exerciseToEdit: {
                ...prevState.exerciseToEdit,
                [event.target.name]: event.target.value
            }
        }) );
    }

    handleSaveModal = () => {
        const { dayToEdit, exerciseToEdit } = this.state;
        this.props.updateExerciseInRoutine( dayToEdit, exerciseToEdit );
        this.handleClose( 'editExerciseModal' );
    }

    handleSave = exercises => {
        this.props.addExercises( exercises );
        this.setState( () => ({ exerciseModal: false }) );
    }

    handleClose = modalName => this.setState( () => ({ [modalName]: false }) );

    handleEditExercise = ( exerciseId, day ) => {
        const { routine } = this.props;
        // Find the exercise in routine by its id and display ExerciseDialog component
        const exercise = routine[day].exercises.find( exercise => exercise.id === exerciseId );
        this.setState({
            editExerciseModal: true,
            exerciseToEdit: { ...exercise },
            dayToEdit: day
        });
    };
    render() {
        const {
            classes,
            prevIndex,
            nextIndex,
            days,
            routine
        } = this.props;

        return (
            <React.Fragment>
                <ExerciseModal
                    open={this.state.exerciseModal}
                    onSave={this.handleSave}
                    onClose={this.handleClose}
                />
                <EditExerciseDialog
                    open={this.state.editExerciseModal}
                    exercise={this.state.exerciseToEdit}
                    onChange={this.handleInputModalChange}
                    onClose={this.handleClose}
                    onSave={this.handleSaveModal}
                />
                <SelectDay />
                <Container className={classes.daysContainer}>
                    {
                        days.map( ( day, index ) =>
                            day.selected &&
                            <RoutineDay
                                key={index}
                                day={day.name}
                                routine={routine[day.name]}
                                onNewExercice={this.handleModal}
                                onEditExercise={this.handleEditExercise}
                                onDeleteDay={this.props.removeDayFromRoutine}
                            />
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
}

const mapStateToProps = ({ routine }) => ({
    days: routine.days,
    routine: routine.routine,
});

const mapDispatchToProps = ({
    setDayForNewExercise,
    addExercises,
    updateExerciseInRoutine,
    removeDayFromRoutine
});

MyRoutine.propTypes = {
    nextIndex: PropTypes.func,
    prevIndex: PropTypes.func,
};

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( MyRoutine ) );