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
import Container from '../../../../shared/Container'

const RoutineDay = ({ classes, day, onNewExercice }) => {
    const handleClick = () => onNewExercice( day );

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{day}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Container className={classes.expansionPanelDetailsC}>
                    Content
                </Container>
                <Button onClick={handleClick} className={classes.button} variant="fab" color="primary">
                    <AddIcon />
                </Button>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles( styles )( RoutineDay );