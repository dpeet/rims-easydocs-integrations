import React from 'react';
import './ContentHeader.scss'
import classnames from "classnames";

const ContentHeader = ({ text, style, className }) => {
    let contentHeaderClass = classnames(className, {"content-header": true})
    return (
        <div className={contentHeaderClass} style={style}>
            <span>{text}</span>
        </div>
    );
};

export default ContentHeader