import React, { Component } from 'react';
// import './input.css';

class Input extends Component {
    render() {
        return (
            <input                 
            className={'input input--' + this.props.customClass}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder} 
            type={this.props.type} />       
          )
    }
}

export default Input;