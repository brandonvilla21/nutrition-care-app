import React from 'react';
import PageBase from '../../../components/PageBase';
import DialogMessage from '../../../components/DialogMessage';
import BodyAreaForm from '../../../components/BodyArea/BodyAreaForm';

class CreateBodyArea extends React.Component {
    state = { open: false };
    
    isSubmitted = submitted => this.setState({ open: submitted });

    handleClose = () => this.setState({ open: false });

    render() {
        return(
            <React.Fragment>
                <DialogMessage
                    open={this.state.open}
                    title="Área del cuerpo agregado"
                    body="Se ha creado una nueva área del cuerpo correctamente!"
                    handleClose={this.handleClose}
                />
                <PageBase title="Registrar una área del cuerpo">
                    <BodyAreaForm onSubmit={this.isSubmitted}/>
                </PageBase>    
            </React.Fragment>            
        );
    }
}

export default CreateBodyArea;