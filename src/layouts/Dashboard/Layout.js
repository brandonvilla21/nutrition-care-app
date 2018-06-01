import React, { Component } from 'react';
import Header from '../../components/Header/';

class Layout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            navDrawerOpen: false
        };

        this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
    }
    
    handleChangeRequestNavDrawer() {
        this.setState({
          navDrawerOpen: !this.state.navDrawerOpen
        });
    }
    
    render() {
        let { navDrawerOpen } = this.state;
        const paddingLeftDrawerOpen = 236;
    
        const styles = {
          header: {
            paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
          }
        };
        return (
            <div>
                <Header
                    styles={styles.header}
                    handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer} />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;