import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Input.css';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || ''
        }
    }

    _changeFn(e) {
        this.setState({ value: e.target.value });

        if (this.props.onChange)
            this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className='Input'>
                <label className='Input--label'>{this.props.label}</label>
                <input 
                    type={this.props.type || 'text'} 
                    onChange={(e) => this._changeFn(e)} 
                    placeholder={this.props.placeholder || ''} 
                    value={this.state.value} 
                    className='Input--field'
                    />
            </div>
        )
    }
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}

export default Input;