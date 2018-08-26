import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classNames from 'classnames';
import customerDrawerItems from './customerDrawerItems';
import adminDrawerItems from './adminDrawerItems';

const renderIcons = () =>
    localStorage.getItem( 'NC_type' ) === 'ADMINISTRATOR'
        ? adminDrawerItems
        : customerDrawerItems;

class LeftDrawer extends Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames( classes.drawerPaper, !this.props.open && classes.drawerPaperClose ),
                }}
                open={this.props.open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {renderIcons()}
                </List>
            </Drawer>
        );
    }
}

export default LeftDrawer;
