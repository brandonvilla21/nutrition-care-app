import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <h3>This is the Session layout</h3>
            {props.children}
        </div>
    );
}

export default Layout;