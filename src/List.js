import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    render() {
        const list = this.props.items.map((item, index) => <li key={index}>{item}</li>);

        return (
            <ul className="List">
                {list}
            </ul>
        )
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired,
}

export default List;