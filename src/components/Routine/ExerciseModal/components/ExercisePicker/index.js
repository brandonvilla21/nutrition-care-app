import React from 'react';
import { Typography, withStyles, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import Container from '../../../../shared/Container';
import styles from './styles';

const ExercisePicker = ({ classes, bodyAreaSelectedId, bodyAreas, onChangeBodyArea }) => {
    const renderBodyAreas = () =>
        bodyAreas.map( bodyArea =>
            <MenuItem
                key={bodyArea.id}
                value={bodyArea.id}
            >
                {bodyArea.description}
            </MenuItem>
        );

    return (
        <Container className={classes.container}>
            <Typography variant="subheading" color="inherit">
                Selecciona un área de cuerpo que desees trabajar
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="body-area">Área del cuerpo</InputLabel>
                <Select
                    value={bodyAreaSelectedId}
                    onChange={onChangeBodyArea}
                    displayEmpty
                    inputProps={{
                        name: 'bodyAreaSelectedId',
                        id: 'body-area',
                    }}
                >
                    {renderBodyAreas()}
                </Select>
            </FormControl>
        </Container >
    );
};

export default withStyles( styles )( ExercisePicker );
