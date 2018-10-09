import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Container from '../../shared/Container';

const FinishRoutine = ({ prevIndex }) => {
    return (
        <div>
            <Typography align="center" variant="display1">
                ¡Estas a un paso de guardar de rutina!
            </Typography>

            <Typography align="center" variant="subheading">
                Para continuar da click en el botón de abajo y podras guardar tu rutina
                para verla más tarde.
            </Typography>
            <Typography style={{ marginTop: '2em' }} align="center">
                <Button variant="extendedFab">
                    <span role="img" aria-label="emoji-arm"> 💪🏼</span>
                    Guardar mi rutina
                </Button>
            </Typography>
            <Container>
                    <Button
                        onClick={prevIndex}
                        variant="raised"
                        color="secondary">
                        Regresar
                    </Button>
            </Container>
        </div>
    );
};

export default FinishRoutine;