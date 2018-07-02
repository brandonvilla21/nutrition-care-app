import React, { Component } from 'react';
import {
    Card,
    CardMedia,
    CardActions,
    CardHeader,
    IconButton,
    Collapse,
    CardContent,
    Typography,
    withStyles,
    Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styles } from './styles';
import classNames from 'classnames';
import logo from '../../../../../logo.svg';

class ExerciseCard extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image={logo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Button variant="extendedFab" className={classes.button}>
                            Extended
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
};

export default withStyles(styles)(ExerciseCard);