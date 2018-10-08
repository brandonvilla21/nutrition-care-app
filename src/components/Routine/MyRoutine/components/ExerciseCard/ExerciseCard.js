import React from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import ExerciseInfo from './components/ExerciseInfo/ExerciseInfo';

const ExerciseCard = ({ classes, exercise, onEditExercise }) => {

    const handleEdit = () => {
        onEditExercise( exercise.id );
    };

    const { description, series, reps } = exercise;
    return (
        <div className={classes.exerciseDialogContainer}>
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <IconButton onClick={handleEdit}>
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
                        description={description}
                        series={series}
                        reps={reps}
                    />
                </CardContent>
            </Card>
        </div>
    );
};
export default withStyles( styles, { withTheme: true })( ExerciseCard );