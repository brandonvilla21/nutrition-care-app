import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const Header = ({ classes, open, handleDrawerOpen, logout }) => (
    <AppBar
        position="absolute"
        className={classNames( classes.appBar, open && classes.appBarShift )}
    >
        <Toolbar disableGutters={!open}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={classNames( classes.menuButton, open && classes.hide )}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap className={classNames( classes.flex )}>
                Nutrition Care
            </Typography>
            <Button
                onClick={logout}
                className={classNames( classes.leftButton )}
                color="inherit">
                Cerrar sesión
            </Button>
        </Toolbar>
    </AppBar>
);

export default Header;
