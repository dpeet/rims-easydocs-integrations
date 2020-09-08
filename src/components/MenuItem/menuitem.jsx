import React from 'react';
import "./menuitem.scss"


export default class MenuItem extends React.PureComponent {
    state = { 
        text: this.props.text ? this.props.text :"Menu Item", 
        selected: this.props.selected ? this.props.selected : false,
    }
    render() { 
        let inputClassName = "menu-item"
        if(this.props.className) {inputClassName += "  " + this.props.className};
        if(this.state.selected) {inputClassName += " selected"};
        return ( <div className={inputClassName}>{this.state.text}</div> );
    }
}
 