import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends Component {
    render() {
        const Element = typeof(this.props.href) === 'undefined' ? "a" : "button";
        
        return (
            <Element
                className={'button button--' + (this.props.customClass || '')}
                onClick={this.props.onClick || (() => {})}
                href={this.props.href || ''}
                disabled={this.props.disabled || 'false'}>
                {this.props.text}
            </Element>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;