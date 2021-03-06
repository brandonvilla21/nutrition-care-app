import React, { Component } from 'react';
import TabContainer from './TabContainer';
import { withStyles, AppBar, Tabs, Tab } from '@material-ui/core';
import InfoOutline from '@material-ui/icons/InfoOutline';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import CheckCircle from '@material-ui/icons/CheckCircle';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import { styles } from './styles';
import MyRoutine from '../MyRoutine/MyRoutine';
import FinishRoutine from '../FinishRoutine/FinishRoutine';

class TabsRoutine extends Component {

    state = {
        value: 0,
    };

    nextIndex = () => {
        const { value } = this.state;
        this.setState({ value: value + 1 });
    }

    prevIndex = () => {
        const { value } = this.state;
        this.setState({ value: value - 1 });
    }

    render() {
        const { value } = this.state;
        return (
            <React.Fragment>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
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
                {
                    value === 0 &&
                    <TabContainer>
                        <GeneralInfo nextIndex={this.nextIndex} />
                    </TabContainer>
                }
                {
                    value === 1 &&
                    <TabContainer>
                        <MyRoutine
                            nextIndex={this.nextIndex}
                            prevIndex={this.prevIndex}
                        />
                    </TabContainer>
                }
                {
                    value === 2 &&
                    <TabContainer>
                        <FinishRoutine submitRoutine={this.props.submitRoutine} prevIndex={this.prevIndex} />
                    </TabContainer>
                }
            </React.Fragment>
        );
    }
}

export default withStyles( styles )( TabsRoutine );
