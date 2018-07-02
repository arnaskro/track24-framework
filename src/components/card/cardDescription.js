import React, { Component } from 'react';

class cardDescription extends Component {
    render() {
        return (
            <p className="card__description"> {this.props.description} </p>
          )
    }
}

export default cardDescription;