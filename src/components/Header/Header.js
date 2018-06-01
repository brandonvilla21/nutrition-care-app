import React, { Component, PropTypes } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { styles as classes } from './styles';

class Header extends Component {
    constructor(props) {
        super(props);
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
    }

    clearLocalStorage() {
        localStorage.clear();
    }

    render() {
        const { styles, handleChangeRequestNavDrawer } = this.props;

        return (
            <div style={classes.root}>
                <AppBar style={styles} position="static">
                    <Toolbar>
                        <IconButton
                            style={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={handleChangeRequestNavDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={classes.flex}>
                            Nutrition Care
                        </Typography>
                        <Button color="inherit">Cerrar sesión</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;