import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import PermIdentity from '@material-ui/icons/PermIdentity';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Restaurant from '@material-ui/icons/Restaurant';

export const drawerItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <FitnessCenter />
            </ListItemIcon>
            <ListItemText primary="Rutinas" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Restaurant />
            </ListItemIcon>
            <ListItemText primary="Dietas" />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemIcon>
                <PermIdentity />
            </ListItemIcon>
            <ListItemText primary="Mi información" />
        </ListItem>
        
    </div>
);
