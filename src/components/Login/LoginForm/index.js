import React from 'react';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const LoginForm = ({ classes, email, password, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <TextField
                name="email"
                label="Email"
                margin="normal"
                fullWidth
                required
                value={email}
                onChange={onChange}
            />
            <TextField
                name="password"
                label="Contraseña"
                margin="normal"
                type="password"
                fullWidth
                required
                value={password}
                onChange={onChange}
            />
            <div className={classes.buttonContainer}>
                <Button type="submit" className={classes.button} variant="extendedFab">
                    <NavigationIcon/>
                    Iniciar Sesión
                </Button>   
            </div>
        </form>
    );
};

export default withStyles( styles )( LoginForm );