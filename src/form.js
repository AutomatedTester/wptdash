import React, { Component } from 'react';

export class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange = (event) => {
        this.setState({checked: event.target.checked ? true : false});
        this.props.onCheckboxChange(this.props.value, event.target.checked);
    }

    render() {
        return (<input
                  name={this.props.name}
                  type="checkbox"
                  checked={this.state.checked}
                  onChange={this.handleChange} />);
    }
}

export class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({value});
        this.props.onChange(value);
    }

    render() {
        return (<input
                name={this.props.name}
                onChange={this.handleChange}
                value={this.props.value}/>);
    }
}


export class Select extends Component {
    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        let selectItems = this.props.options.map(option => <option value={option.value} key={option.value}>{option.name}</option>);
        return (<select
                  onChange={this.handleChange}
                  value={this.props.value}>
                  {selectItems}
                </select>);
    }
}
