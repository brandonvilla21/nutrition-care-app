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
import EditExerciseDialog from './components/EditExerciseDialog/EditExerciseDialog';

class MyRoutine extends React.Component {
    state = {
        open: false,
        editModalOpen: false
    };

    handleModal = day =>
        this.setState( () => {
            this.props.setDayForNewExercise( day );
            return { open: true };
        })

    handleSave = exercises => {
        this.props.addExercises( exercises );
        this.setState( () => ({ open: false }) );
    }
    handleClose = () => this.setState( () => ({ open: false }) )
    handleEditExercise = exerciseId => {
        // TODO
        // Find the exercise in routine by its id and display ExerciseDialog component
        console.log( 'ID', exerciseId );
        this.setState({ editModalOpen: true });
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
                    open={this.state.open}
                    onSave={this.handleSave}
                    onClose={this.handleClose}
                />
                <EditExerciseDialog
                    open={this.state.editModalOpen}
                    onClose={this.handleClose}
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
    addExercises
});

MyRoutine.propTypes = {
    nextIndex: PropTypes.func,
    prevIndex: PropTypes.func,
};

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( MyRoutine ) );