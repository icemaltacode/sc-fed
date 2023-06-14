import React, { Component } from "react";

class List extends Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                `${this.props.listType === "numbered" ? "ol" : "ul"}`,
                null,
                this.props.children.map((item, i) => React.createElement(
                    "li",
                    { key: `${i}` },
                    item
                ))
            )
        );
    }
}

export default List;