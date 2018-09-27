import React from 'react';

const Container = ({ children, ...props }) => (
    <div {...props} >{children}</div>
)

export default Container;