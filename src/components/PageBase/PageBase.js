import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles, Typography, Divider } from '@material-ui/core';
import { styles } from './styles';

const PageBase = ({ children, title, classes }) => {
    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography
                    className={classes.title}
                    variant="headline"
                    component="h3">
                    {title}
                </Typography>
                {title && <Divider className={classes.divider}/>}
                {children}
            </Paper>
        </div>
    );
};

PageBase.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
};

export default withStyles(styles)(PageBase);