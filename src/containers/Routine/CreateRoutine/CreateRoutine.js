import React from 'react';
import TabsRoutine from '../../../components/Routine/TabsRoutine/TabsRoutine';
import { connect } from 'react-redux';
import { createRoutine, resetSuccessProp } from '../store/actions/actions';
import Container from '../../../components/shared/Container';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CreateRoutine = ({ success, createRoutine, resetSuccessProp }) => {
    return (
        <Container>
            <Dialog
                aria-labelledby="successful-created-routine-modal"
                disableBackdropClick
                open={success}
                onClose={resetSuccessProp}
            >
                <DialogTitle id="successful-created-routine-modal">
                    Rutina registrada
                </DialogTitle>

                <DialogContent>
                    Tu rutina ha sido registrada con exito!
                </DialogContent>

                <DialogActions>
                    <Button
                        component={Link} 
                        to="/dashboard/routine"
                        color="primary"
                        onClick={resetSuccessProp}
                    >
                        Finalizar
                    </Button>
                </DialogActions>

            </Dialog>
            <TabsRoutine submitRoutine={createRoutine} />
        </Container>
    );
};

const mapStateToProps = ({ routine }) => ({
    success: routine.success
});

const mapDispatchToProps = {
    createRoutine,
    resetSuccessProp
};

export default connect( mapStateToProps, mapDispatchToProps )( CreateRoutine );