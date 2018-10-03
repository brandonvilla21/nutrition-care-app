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

const RoutineDay = ({ classes, day, routine, onNewExercice }) => {
    const handleClick = () => onNewExercice( day );
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{day}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Container className={classes.expansionPanelDetailsC}>
                    {
                        routine.exercises.map( ( elment, index )=>
                            <ExerciseCard
                                key={index}
                                image={elment.exercise.imageName}
                                description={elment.description}
                                series={elment.series}
                                reps={elment.reps}
                                onEditExercise={this.handleEditExercise}
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