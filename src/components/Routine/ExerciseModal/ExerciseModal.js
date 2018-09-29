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
        bodyAreaSelectedId: -1
    }
    // TODO this component is being mounted in a not desired moment
    // so the fetch occours before expected
    componentDidMount() {
        this.props.fetchBodyAreas();
    }
    handleBodyAreaChange = event => {
        this.setState( prevState => {
            const bodyAreaSelectedId = event.target.value;
            this.props.fetchExerciesFromBodyArea( bodyAreaSelectedId );
            return { bodyAreaSelectedId };
        });
    }
    render() {
        const {
            day,
            classes,
            open,
            onSave,
            onClose
        } = this.props;
        return (
            <Dialog
                fullScreen
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
            >
            <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton color="inherit" onClick={onClose} aria-label="Cerrar">
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    Ejercicio para el {day}
                  </Typography>
                  <Button color="inherit" onClick={onSave}>
                    Guardar
                  </Button>
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