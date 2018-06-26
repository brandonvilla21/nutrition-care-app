import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { styles } from './styles';

const AddButton = ({ classes }) => {
    return (
        <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
            <AddIcon />
        </Button>
    );
}


export default withStyles(styles)(AddButton);