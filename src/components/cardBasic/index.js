import React, { Component } from 'react';
import {CardAlert, CardDescription, CardHeading, CardStatus , CardCaption } from '../card';

class cardBasic extends Component {
    render() {
        return (
            <div className="card card--basic">
                <CardStatus status={this.props.status}></CardStatus>
                <CardHeading heading={this.props.heading}></CardHeading>
                <CardCaption caption={this.props.caption}></CardCaption>
                <CardDescription description={this.props.description}></CardDescription>
                <CardAlert alertType={this.props.alertType} ></CardAlert>
            </div>
          )
    }
}

export default cardBasic; 