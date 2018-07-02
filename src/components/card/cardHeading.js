import React, { Component } from 'react';

class cardHeading extends Component {
    render() {
        return (
            <h6 className="card__title"> {this.props.heading} </h6>
          )
    }
}

export default cardHeading;