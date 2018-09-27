import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { styles } from './styles';
import { Link } from 'react-router-dom';

const AddButton = ({ to, classes }) => {
    return (
        <Button component={Link} to={to} variant="fab" color="primary" aria-label="add" className={classes.button}>
            <AddIcon />
        </Button>
    );
}

export default withStyles( styles )( AddButton );