import React, { Component } from 'react';
import {CardDescription, CardHeading } from '../card';

class cardTravelWarning extends Component {
    render() {
        return (
            <div className="card card--basic">
                 {/* card heading with caption and link */}

                <CardHeading heading={this.props.heading}></CardHeading>
                <CardDescription description={this.props.description}></CardDescription>
                {/* divider */}
                <CardDescription></CardDescription>


            </div>
          )
    }
}

export default cardTravelWarning; 