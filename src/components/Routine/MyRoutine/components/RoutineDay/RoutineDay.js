import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails,
    withStyles,
    Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styles } from './styles';
import AddIcon from '@material-ui/icons/Add';
import Container from '../../../../shared/Container';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

const RoutineDay = ({ classes, day, routine, onNewExercice, onEditExercise }) => {
    const handleClick = () => onNewExercice( day );
    const handleEditExercise = exerciseId => onEditExercise( exerciseId, day );
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{day}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Container className={classes.expansionPanelDetailsC}>
                    {
                        routine.exercises.map( ( exercise  )=>
                            <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                                onEditExercise={handleEditExercise}
                            />
                        )
                    }
                </Container>
                <Button onClick={handleClick} className={classes.button} variant="fab" color="primary">
                    <AddIcon />
                </Button>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles( styles )( RoutineDay );