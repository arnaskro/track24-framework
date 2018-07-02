import React, { Component } from 'react';

class cardCaption extends Component {
    render() {
        return (
            <p className="card__caption"> {this.props.caption} </p>
          )
    }
}

export default cardCaption;