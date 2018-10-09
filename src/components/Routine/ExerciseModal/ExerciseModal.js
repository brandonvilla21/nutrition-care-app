import React from 'react';
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    withStyles,
    Slide
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';
import Container from '../../shared/Container';
import { connect } from 'react-redux';
import ExercisePicker from './components/ExercisePicker';
import {
    fetchBodyAreas,
    fetchExerciesFromBodyArea
} from '../../../containers/Routine/store/actions/actions';

const Transition = props => <Slide direction="up" {...props} />;

class ExerciseModal extends React.Component {
    state = {
        bodyAreaSelectedId: -1,
        exercisesSelected: []
    }
    // TODO this component is being mounted in a not desired moment
    // so the fetch occours before expected
    componentDidMount() {
        this.props.fetchBodyAreas();
    }
    handleBodyAreaChange = event => {
        this.setState( () => {
            const bodyAreaSelectedId = event.target.value;
            this.props.fetchExerciesFromBodyArea( bodyAreaSelectedId );
            return { bodyAreaSelectedId, exercisesSelected: [] };
        });
    }
    handleSelectExercise = exercise => {
        this.setState( ({ exercisesSelected }) => {
            const index = exercisesSelected.findIndex( e  => e.id === exercise.id );
            // Exercise is not part of the list, will be added
            if ( index === -1 )
                return { exercisesSelected: [ ...exercisesSelected, exercise ] };
            // Exercise is already part of the list, will be removed
            return {
                exercisesSelected: [
                    ...exercisesSelected.slice( 0, index ),
                    ...exercisesSelected.slice( index + 1 )
                ]
            };
        });
    }
    handleSave = () => {
        this.props.onSave( this.state.exercisesSelected );
    }

    handleClose = () => this.props.onClose( 'exerciseModal' );

    render() {
        const {
            day,
            classes,
            open
        } = this.props;
        return (
            <Dialog
                fullScreen
                open={open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
            >
            <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton color="inherit" onClick={this.handleClose} aria-label="Cerrar">
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    Ejercicio para el {day}
                  </Typography>
                  {
                    // Display button if there are exercises selected  
                    this.state.exercisesSelected.length > 0 &&
                    <Button color="inherit" onClick={this.handleSave}>
                        Guardar
                    </Button>
                  }
                </Toolbar>
            </AppBar>
            <Container className={classes.container}>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    Selecciona un ejercicio
                </Typography>
                <ExercisePicker
                    bodyAreas={this.props.bodyAreas}
                    bodyAreaSelectedId={this.state.bodyAreaSelectedId}
                    onChangeBodyArea={this.handleBodyAreaChange}
                    exercises={this.props.exercises}
                    exerciseSelected={this.state.exercisesSelected}
                    onSelectExercise={this.handleSelectExercise}
                    onSubmitExercise={this.handleSave}
                />
            </Container>
          </Dialog>
        );
    }
}

const mapStateToProps = ({ routine }) => ({
    day: routine.dayForNewExercise,
    bodyAreas: routine.bodyAreas,
    bodyAreaSelectedId: routine.bodyAreaSelectedId,
    exercises: routine.exercises,
});

const mapDispatchToProps = ({
    fetchBodyAreas,
    fetchExerciesFromBodyArea
});

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( ExerciseModal ) );