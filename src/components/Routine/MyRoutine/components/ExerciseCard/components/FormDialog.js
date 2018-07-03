import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const FormDialog = ({ classes }) => {
    return (
        <div>
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
            />
        </div>
    );
}

export default withStyles(styles)(FormDialog);