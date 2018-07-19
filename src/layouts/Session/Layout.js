import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '../../../node_modules/@material-ui/core';

const Layout = ({ children, classes }) => {
    
    return (
        <Paper className={classes.root} elevation={5}>
            {children}
        </Paper>
    );
};

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      marginTop: theme.spacing.unit * 16,
      marginRight: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(Layout);