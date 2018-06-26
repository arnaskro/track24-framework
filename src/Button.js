import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.callback}>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
}

export default Button;