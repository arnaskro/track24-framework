import React, { Component } from 'react';
import {CardDescription, CardHeading } from '../card';

class cardLocation extends Component {
    render() {
        return (
            <div className="card card--basic">
                <CardHeading heading={this.props.heading}></CardHeading>
                <div className="card__divider"></div>
                <CardDescription description={this.props.description}></CardDescription>
            </div>
          )
    }
}

export default cardLocation; 