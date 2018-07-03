import React, { Component } from 'react';
import {
    Card,
    CardMedia,
    CardHeader,
    CardContent,
    withStyles,
    Button
} from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import { styles } from './styles';
import logo from '../../../../../logo.svg';

class ExerciseCard extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title="Press militar de hombro"
                    subheader="[brazo, triceps, hombro]"
                />
                <CardMedia
                    className={classes.media}
                    image={logo}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                    <Button variant="extendedFab" className={classes.button}>
                        <NavigationIcon className={classes.extendedIcon} />
                        Ver más
                    </Button>
                </CardContent>
            </Card>
        );
    }
};

export default withStyles(styles)(ExerciseCard);