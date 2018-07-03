import React from 'react';
import Typography from '@material-ui/core/Typography';

const ExerciseInfo = ({ description, series, reps}) => {
    
    return (
        <Typography variant="caption">
            Descripción: <strong>
                            { description || '[Ingrese descripción]' }
                        </strong> <br/>
            Nº series: <strong>
                            { series || '[Ingrese las series]'}
                        </strong> <br/>
            Nº repeticiones: <strong>
                                { reps || '[Ingrese las repeticiones]'}
                            </strong> <br/>
    </Typography>
    );
}

export default ExerciseInfo;