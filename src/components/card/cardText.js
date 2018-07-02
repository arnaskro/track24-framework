import React, { Component } from 'react';

class cardText extends Component {
    render() {
        return (
            <p  className={"card__text " + (this.props.text ? `card__text--${this.props.text}` : "")}  > {this.props.text} </p>
          )
    }
}

export default cardText;