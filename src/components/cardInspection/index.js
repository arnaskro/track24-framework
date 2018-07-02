import React, { Component } from 'react';
import {CardAlert, CardDescription, CardHeading, CardStatus} from '../card';

class cardInspection extends Component {
    render() {
        return (
            <div className="card card--basic">
                <CardHeading heading={this.props.heading}></CardHeading>
                <CardDescription description={this.props.description}></CardDescription>
            </div>
          )
    }
}

export default cardInspection; 