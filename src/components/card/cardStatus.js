import React, { Component } from 'react';

class cardStatus extends Component {
    render() {
        return (
            <div
            className={"card__status " + (this.props.status ? `card__status--${this.props.status}` : "")}  > 
                {this.props.status}
             </div>
          )
    }
}

export default cardStatus;