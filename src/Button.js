import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Button.css';

class Button extends Component {
    render() {
        return (
            <button className="Button" onClick={this.props.callback}>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
}

export default Button;