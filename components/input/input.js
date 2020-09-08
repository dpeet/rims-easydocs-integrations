import React from 'react';
import './input.css'

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label ? this.props.label :"Name",
            inputValue: '',
            fieldActive: false,
            inactive: this.props.inactive ? this.props.inactive : false
        }
    }

    // to activate the input field while typing
    activateField() {
        console.log("setting state")
        this.setState({
            fieldActive: true
        })
    }

    // to deactivate input only if it's empty
    disableField(e) {
        console.log("setting state off")
        if (e.target.value === "") {
            this.setState({
                fieldActive: false
            })
        }
    }
    // to update the changes in the input and activate it
    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value,
        });
        this.activateField(e);
        e.preventDefault();
    }

    // TODO Harden Inactive so it actually doesn't accept input
    render() {
        console.log(this.props.label)
        let inputClassName = "dev-input";
        if(this.state.fieldActive) {inputClassName += " field-active"};
        if(this.state.inputValue !== '') {inputClassName += " field-filled"};
        if(this.state.inactive) {inputClassName = "dev-input inactive"}
        return (
            <div className={this.props.className}>
                {/* <form> */}
                    <div className="dev-input-group">
                        <div className="dev-input-wrapper">
                        <input
                            className={inputClassName}
                            type="text"
                            value={this.state.inputValue}
                            onFocus={() => this.activateField()}
                            onBlur={(e) => this.disableField(e)}
                            onChange={(e) => this.updateInputValue(e)}
                        />
                        </div>
                        <div className="dev-label-wrapper">
                        <label
                            // check state the input, whether it is active then apply the class for floating label
                            className={this.state.fieldActive ? "field-active" : ""}> {this.state.label} 
                        </label>
                        </div>
                    </div>
                {/* // </form> */}
            </div>
        );
    }
}
