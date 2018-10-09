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
import Delete from '@material-ui/icons/Delete';
import Container from '../../../../shared/Container';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

const RoutineDay = ({ classes, day, routine, onNewExercice, onEditExercise, onDeleteDay }) => {
    const handleClick = () => onNewExercice( day );
    const handleEditExercise = exerciseId => onEditExercise( exerciseId, day );
    const handleDeleteDay = () => onDeleteDay( day );
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
                <Container className={classes.buttonContainer}>
                    <Button disabled onClick={handleDeleteDay} className={classes.button} variant="fab" color="secondary">
                        <Delete />
                    </Button>
                    <Button onClick={handleClick} className={classes.button} variant="fab" color="primary">
                        <AddIcon />
                    </Button>
                </Container>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles( styles )( RoutineDay );