import React, { Component, PropTypes } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

class Header extends Component {
    constructor(props) {
        super(props);
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
    }

    clearLocalStorage() {
        localStorage.clear();
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <AppBar
                position="absolute"
                className={classNames(classes.appBar, this.props.open && classes.appBarShift)}
            >
                <Toolbar disableGutters={!this.props.open}>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={this.props.handleDrawerOpen}
                      className={classNames(classes.menuButton, this.props.open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                      Nutrition Care
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}


export default Header;
