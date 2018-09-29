import React from 'react';
import { Typography, withStyles, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core';
import Container from '../../../../shared/Container';
import styles from './styles';
import SelectableTable from '../../../../shared/SelectableTable';

const ExercisePicker = ({
    classes,
    bodyAreaSelectedId,
    bodyAreas,
    exercises,
    exerciseSelected,
    onSelectExercise,
    onChangeBodyArea,
    onSubmitExercise
}) => {
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
                1. Selecciona un área de cuerpo que desees trabajar
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

            <Typography variant="subheading" color="inherit">
                2. Selecciona el ejercicio que desees agregar
            </Typography>
            <SelectableTable
                elements={exercises}
                selectedElements={exerciseSelected}
                mainTableHeader="SELECCIONA UN EJERCICIO"
                defaultPageSize={5}
                noDataTextMainTable="No hay datos actualmente :("
                columns={reactTablecolumns}
                onToggleRow={onSelectExercise}
                enableSecondaryTable={false}
            />
            {
                // Display button for submitting exercise
                exerciseSelected.length > 0 &&
                <Button
                    variant="contained"
                    color="primary"
                    style={{ float: 'right', marginTop: '1em' }}
                    onClick={onSubmitExercise}
                >
                    Agregar ejercicio{exerciseSelected.length > 1 ? 's' : ''}
                </Button>
            }
        </Container >
    );
};

const reactTablecolumns = [
    {
      Header: 'ID',
      accessor: 'id',
      maxWidth: 100
    },
    {
      Header: 'Nombre',
      accessor: 'name'
    }
  ];

export default withStyles( styles )( ExercisePicker );
