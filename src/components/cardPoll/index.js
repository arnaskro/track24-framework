import React, { Component } from 'react';
import { CardHeading } from '../card';

class cardPoll extends Component {
    render() {
        return (
            <div className="card card--basic">
                <CardHeading heading={this.props.heading}></CardHeading>
            </div>
          )
    }
}

export default cardPoll; 