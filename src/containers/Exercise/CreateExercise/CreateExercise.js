import React from 'react';
import PageBase from '../../../components/PageBase';
import ExerciseForm from '../../../components/Exercise/ExerciseForm';
import DialogMessage from '../../../components/DialogMessage';

class CreateExercise extends React.Component {
    state = { open: false };
    
    isSubmitted = submitted => this.setState({ open: submitted });

    handleClose = () => this.setState({ open: false });

    render() {
        return(
            <React.Fragment>
                <DialogMessage
                    open={this.state.open}
                    title="Ejercicio agregado"
                    body="¡Se ha creado un nuevo ejercicio correctamente!"
                    handleClose={this.handleClose}
                />
                <PageBase title="Registrar un nuevo ejercicio">
                    <ExerciseForm onSubmit={this.isSubmitted}/>
                </PageBase>    
            </React.Fragment>            
        );
    }
}

export default CreateExercise;