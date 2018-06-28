import React, { Component } from 'react';
import TabContainer from './TabContainer';
import { withStyles, AppBar, Tabs, Tab } from '@material-ui/core';
import InfoOutline from '@material-ui/icons/InfoOutline';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import CheckCircle from '@material-ui/icons/CheckCircle';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import { styles } from './styles';

class TabsRoutine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
      return (
        <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    // Remove this prop to avoid changing tabs without buttons
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                    scrollable
                    scrollButtons="auto"
                >
                    <Tab label="Información general" icon={<InfoOutline />}/>
                    <Tab label="Mi Rutina" icon={<FitnessCenter />}/>
                    <Tab label="Finalizar" icon={<CheckCircle />}/>
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><GeneralInfo /></TabContainer>}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
      )
    }
}

export default withStyles(styles)(TabsRoutine);
