import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends Component {
    render() {
        const Element = this.props.href ? "a" : "Button";
        return (
            <Element
                className={'button button--' + this.props.customClass}
                onClick={this.props.onClick}
                href={this.props.href}
                disabled={this.props.disabled}>
                {this.props.text}
            </Element>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;