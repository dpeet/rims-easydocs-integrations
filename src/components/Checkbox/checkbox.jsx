import React, { useState } from 'react';
import checkbox_filled from './Checkbox Filled.svg'
import checkbox_unfilled from './Checkbox Unfilled.svg'
import classnames from 'classnames';

const Checkbox = ({ checked, className, style }) => {
    const [isChecked, setChecked] = useState(checked);
    let checkboxClass = classnames(className)
    let componentStyle = Object.assign({}, {display:"inherit"}, style);

    return (
        <div style={componentStyle}>
            {isChecked
                ? <img src={checkbox_filled} className={checkboxClass} onClick={() => setChecked(false)} alt="checked" />
                : <img src={checkbox_unfilled} className={checkboxClass} onClick={() => setChecked(true)} alt="unchecked"/>
            }
        </div>

    );
};

export default Checkbox
