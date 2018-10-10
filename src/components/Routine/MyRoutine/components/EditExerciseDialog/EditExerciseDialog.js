import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button
} from '@material-ui/core';

const EditExerciseDialog = ({ open, exercise, onChange, onSave, onClose }) => {
    const handleCancel = () => onClose( 'editExerciseModal' );
    return (
        <Dialog
            open={open}
            onClose={handleCancel}
        >
        <DialogTitle>Edita la información de tu ejercicio</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    En esta ventana podras editar toda la información relacionada al
                    ejercicio que has seleccionado ({exercise.name})
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="description"
                    name="description"
                    label="Descripción del ejercicio"
                    placeholder="Agrega una breve descripción del ejercicio"
                    type="text"
                    value={exercise.description}
                    onChange={onChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="series"
                    name="series"
                    label="Número de series"
                    type="number"
                    value={exercise.series}
                    onChange={onChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="reps"
                    name="reps"
                    label="Número de repeticiones"
                    type="number"
                    value={exercise.reps}
                    onChange={onChange}
                    fullWidth
                />
                 <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={onSave} color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default EditExerciseDialog;