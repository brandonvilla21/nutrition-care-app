import React from 'react';
import PageBase from '../../../components/PageBase';
import FoodForm from '../../../components/Food/FoodForm';
import DialogMessage from '../../../components/DialogMessage';

class CreateFood extends React.Component {
    state = { open: false };
    
    isSubmitted = submitted => this.setState({ open: submitted });

    handleClose = () => this.setState({ open: false });

    render() {
        return(
            <React.Fragment>
                <DialogMessage
                    open={this.state.open}
                    title="Alimento agregado"
                    body="Se ha creado un nuevo alimento correctamente!"
                    handleClose={this.handleClose}
                />
                <PageBase title="Registrar un alimento">
                    <FoodForm onSubmit={this.isSubmitted}/>
                </PageBase>    
            </React.Fragment>            
        );
    }
}

export default CreateFood;