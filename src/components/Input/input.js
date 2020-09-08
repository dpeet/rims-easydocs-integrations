import React from 'react';
import './input.scss'
import classnames from "classnames";


export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label ? this.props.label : "Name",
            inputValue: this.props.inputValue ? this.props.inputValue : '',
            fieldActive: false,
            inactive: this.props.inactive !== undefined ? this.props.inactive : false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            console.log(this.props.inactive)
            this.setState({
                inputValue: this.props.inputValue !== undefined ? this.props.inputValue : prevState.inputValue,
                label: this.props.label !== undefined ? this.props.label : prevState.label,
                inactive: this.props.inactive !== undefined ? this.props.inactive : prevState.inactive
            })
            console.log(this.props, prevState)
            // TODO this can't be a good idea
            if (this.props.inputValue !== prevProps.inputValue && this.props.inputValue !== prevState.inputValue){
                this.setState({
                    fieldActive:true
                })
            }
            if(prevState.fieldActive === true && this.props.inputValue === ""){
                this.setState({
                    fieldActive:false
                })
            }
        }

    }

    // to activate the input field while typing
    activateField() {
        // console.log("setting state")
        this.setState({
            fieldActive: true
        })
    }

    // to deactivate input only if it's empty
    disableField(e) {
        // console.log("setting state off")
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
        // console.log(this.props.label)
        let inputClassName = classnames("dev-input", {
            "field-active": this.state.fieldActive,
            "field-filled": this.state.inputValue,
            })
        //TODO oof
        let overallClassName = classnames(this.props.className, "dev-input-top")
        if(this.state.inactive) {inputClassName = "dev-input inactive"}
        return (
            <div className={overallClassName}>
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
