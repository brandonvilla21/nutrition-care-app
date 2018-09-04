import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, withStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styles } from './styles';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

const RoutineDay = ({ classes, day }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{day}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                {/* All Cards and buttons here */}
                <ExerciseCard />
                <ExerciseCard />
                <ExerciseCard />
                <ExerciseCard />
                <ExerciseCard />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles( styles )( RoutineDay );