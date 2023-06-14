import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const boldReact = React.createElement("em", null, "React");
const greeting = React.createElement("h1", null, "Hello, ", boldReact, "!");
const link = React.createElement("a", { href: "//reactjs.org" }, "Learn more");
const rootNode = React.createElement(React.Fragment, null, greeting, link);

class Link extends React.Component {
    render() {
        return React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { href: "//reactjs.org"},
                "Learn more about React"
            )
        );
    }
}

// const link1 = React.createElement(Link);
// const link2 = React.createElement(Link);
// const link3 = React.createElement(Link);
// const linkGroup = React.createElement(React.Fragment, null, link1, link2, link3);

class CustomLink extends React.Component {
    render() {
        const link = React.createElement(
            "a",
            { href: this.props.url },
            `Learn more about ${this.props.framework}`
        );
        if (this.props.framework === "React") {
            return React.createElement(
                "div",
                { style: {"text-transform": "uppercase"}},
                link
            );
        } else {
            return React.createElement(
                "p",
                null,
                link  
            );
        }
    }
}

// const customLink1 = React.createElement(CustomLink, {
//     framework: "React",
//     url: "//reactjs.org"
// });

// const customLink2 = React.createElement(CustomLink, {
//     framework: "Vue",
//     url: "//vuejs.org"
// });


// const linkGroup = React.createElement(React.Fragment, null, customLink1, customLink2);

class LinkWithChildren extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement("a", { href: this.props.url }, this.props.children)
        );
    }
}

const lwc1 = React.createElement(LinkWithChildren, { url: "//angular.io" }, "Angular");
const largeReact = React.createElement("h1", null, "React");
const lwc2 = React.createElement(LinkWithChildren, { url: "//reactjs.org" }, largeReact);

const linkGroup = React.createElement(React.Fragment, null, lwc1, lwc2);
root.render(linkGroup);

// const rootNode = React.createElement(
//   React.Fragment,
//   null,
//   React.createElement(
//     "h1",
//     null,
//     "Hello ", React.createElement(
//       "em",
//       null,
//       "React"
//     ), "!"
//   ),
//   React.createElement(
//     "a",
//     { href: "//reactjs.org" },
//     "Learn more",
//   ),
// );

