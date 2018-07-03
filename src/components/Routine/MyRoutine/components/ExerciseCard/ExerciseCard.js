import React, { Component } from 'react';
import {
    Card,
    CardMedia,
    CardHeader,
    CardContent,
    withStyles,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { styles } from './styles';
import logo from '../../../../../logo.svg';
import ExerciseDialog from './components/ExerciseDialog';
import IconButton from '@material-ui/core/IconButton';
import ExerciseInfo from './components/ExerciseInfo/ExerciseInfo';

class ExerciseCard extends Component {
    state = { open: false };

    handleOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div>
                <ExerciseDialog title="Press militar de hombro" open={open} handleClose={this.handleClose}/>
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton>
                                <CreateIcon color="secondary" />
                            </IconButton>
                        }
                        title="Press militar de hombro"
                        subheader="[brazo, triceps, hombro]"
                    />
                    <CardMedia
                        className={classes.media}
                        image={logo}
                    />
                    <CardContent className={classes.cardContent}>
                        <ExerciseInfo
                            description="my desc"
                            series={5}
                            reps={20}
                        />
                    </CardContent>
                </Card>
            </div>
        );
    }
};

export default withStyles(styles, { withTheme: true})(ExerciseCard);