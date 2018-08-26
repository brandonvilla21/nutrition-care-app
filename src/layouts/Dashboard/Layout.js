import React, { Component } from 'react';
import Header from '../../components/Header/';
import LeftDrawer from '../../components/LeftDrawer';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';
import { logout } from '../../services/user.service';
import { withRouter } from 'react-router';

class Layout extends Component {

    state = { open: false };

    handleDrawerOpen = () => this.setState({ open: true })

    handleDrawerClose =() => this.setState({ open: false })

    handleSession = () => logout( () => this.props.history.push( '/login' ) )

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <Header
                    open={open}
                    classes={classes}
                    handleDrawerOpen={this.handleDrawerOpen}
                    logout={this.handleSession}
                />
                <LeftDrawer
                    open={open}
                    classes={classes}
                    theme={theme}
                    handleDrawerClose={this.handleDrawerClose}
                />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default withRouter( withStyles( styles, { withTheme: true })( Layout ) );
