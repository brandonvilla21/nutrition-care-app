import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Container from '../../../../shared/Container';
import styles from './styles';

const ExercisePicker = ({ classes }) => {
    return (
        <Container className={classes.container}>
            <Typography variant="subheading" color="inherit">
                Selecciona un área de cuerpo que desees trabajar
            </Typography>
            {/* <Select
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-simple',
                }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select> */}
        </Container >
    );
};

export default withStyles( styles )( ExercisePicker );
