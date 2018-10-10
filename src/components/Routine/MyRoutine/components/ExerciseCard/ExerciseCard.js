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
import IconButton from '@material-ui/core/IconButton';
import ExerciseInfo from './components/ExerciseInfo/ExerciseInfo';

const ExerciseCard = ({ classes, exercise, onEditExercise }) => {

    const handleEdit = () => {
        onEditExercise( exercise.id );
    };

    const { name, description, series, reps, imageName } = exercise;
    return (
        <div className={classes.exerciseDialogContainer}>
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <IconButton onClick={handleEdit}>
                            <CreateIcon color="secondary" />
                        </IconButton>
                    }
                    title={name}
                    // subheader="[brazo, triceps, hombro]"
                />
                <CardMedia
                    className={classes.media}
                    // Set a static with/height in case
                    image={`${process.env.REACT_APP_IMAGE_ENTRY_POINT}/${imageName}`}
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