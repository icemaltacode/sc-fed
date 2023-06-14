import React, { Component, Fragment } from "react";
import List from './List';

class ListWithHeader extends Component {
    render() {
        return (
            React.createElement(
                Fragment,
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.header
                ),
                React.createElement(
                    List,
                    { listType: "numbered" },
                    this.props.children
                )
            )
        )
    }
}

export default ListWithHeader;