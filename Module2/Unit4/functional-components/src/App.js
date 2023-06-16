// Functional Components Version
import "./App.css";

function App() {
  return <main>
    <TodoList listName="Shopping List" listItems={['Eggs', 'Milk', 'Honey']} id="list-shopping" className="shoppingList"/>
    <TodoList listItems={['Finish Unit 4', 'Get a haircut', 'Conquer the world']} />
  </main>
}

function TodoList({listItems, listName = "New List", ...rest}) {
  return <>
    <h1 {...rest}>
      {listName}
    </h1>
    <ul>
      {listItems.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
    </ul>
  </>
}

function ListItem({children}) {
  return <li>{children}</li>
}


// Class-Based Components Version
// import { Component } from "react";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <main>
//         <TodoList listName="Shopping List" listItems={['Eggs', 'Milk', 'Honey']}/>
//       </main>
//     )
//   }
// }

// class TodoList extends Component {
//   render() {
//     return <>
//     <h1>
//       {this.props.listName}
//     </h1>
//     <ul>
//       {this.props.listItems.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
//     </ul>
//     </>
//   }
// }

// class ListItem extends Component {
//   render() {
//     return <li>{this.props.children}</li>
//   }
// }

export default App;
