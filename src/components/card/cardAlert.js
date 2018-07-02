import React, { Component } from 'react';

class cardAlert extends Component {
    render() {
        return (
            <div
            className={"card__alert " + (this.props.alertType ? `card__alert--${this.props.alertType}` : "")}  > 
            {this.props.alertType} 
            <i className="card__alert__icon"></i>
            </div>
          )
    }
}

export default cardAlert;