import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, withStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styles } from './styles';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

class RoutineDay extends Component  {
    state = {
        open: false,
        openConfirm: false,
    };
    
    render() {
        const { classes } = this.props;

        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Dia de la semana</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {/* All Cards and buttons here */}
                    <ExerciseCard />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }   
}

export default withStyles(styles)(RoutineDay);