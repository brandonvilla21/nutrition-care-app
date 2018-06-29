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
    withStyles
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
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton
                        className={classNames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph variant="body2">
                                Method:
                            </Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
};

export default withStyles(styles)(ExerciseCard);