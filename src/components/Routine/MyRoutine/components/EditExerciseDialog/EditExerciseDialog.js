import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Slide } from '@material-ui/core';

const Transition = props => <Slide direction="up" {...props} />;

const EditExerciseDialog = ({ open, onClose, }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
        >
            <div>
                Dialog Content
            </div>
        </Dialog>
    );
};

export default EditExerciseDialog;