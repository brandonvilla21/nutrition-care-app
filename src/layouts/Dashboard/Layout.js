import React, { Component } from 'react';
import Header from '../../components/Header/';
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';

class Layout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        };

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }
    
    handleDrawerOpen() {
        this.setState({ open: true });
    };
    
    handleDrawerClose() {
        this.setState({ open: false });
    };
    
    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <Header
                    open={open}
                    classes={classes}
                    handleDrawerOpen={this.handleDrawerOpen}
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

export default withStyles(styles, { withTheme: true })(Layout);
