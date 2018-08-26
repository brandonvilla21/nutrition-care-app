import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Accessibility from '@material-ui/icons/Accessibility';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Restaurant from '@material-ui/icons/Restaurant';
import { Link } from 'react-router-dom';

export default (
    <React.Fragment>
        <ListItem button component={Link} to="/dashboard/food">
            <ListItemIcon>
                <Restaurant />
            </ListItemIcon>
            <ListItemText primary="Alimentos" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/body-area">
            <ListItemIcon>
                <Accessibility />
            </ListItemIcon>
            <ListItemText primary="Áreas del cuerpo" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/exercise" >
            <ListItemIcon>
                <FitnessCenter />
            </ListItemIcon>
            <ListItemText primary="Ejercicios" />
        </ListItem>
    </React.Fragment>
);
