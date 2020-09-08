import React from 'react';
import './tree.scss'

const Tree = ({ children }) => {
    let divStyle = {
        display:"flex",
        flexDirection:"column",
        flex:"1"
    }
    return <div style={divStyle}>{children}</div>;
  };

export default Tree;  