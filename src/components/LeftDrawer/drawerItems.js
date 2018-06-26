import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import PermIdentity from '@material-ui/icons/PermIdentity';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Restaurant from '@material-ui/icons/Restaurant';
import { Link } from 'react-router-dom';

export const drawerItems = (
    <div>
        <ListItem button component={Link} to="/routine" >
            <ListItemIcon>
                <FitnessCenter />
            </ListItemIcon>
            <ListItemText primary="Rutinas" />
        </ListItem>
        <ListItem button component={Link} to="/diet">
            <ListItemIcon>
                <Restaurant />
            </ListItemIcon>
            <ListItemText primary="Dietas" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/my-info">
            <ListItemIcon>
                <PermIdentity />
            </ListItemIcon>
            <ListItemText primary="Mi información" />
        </ListItem>
    </div>
);
