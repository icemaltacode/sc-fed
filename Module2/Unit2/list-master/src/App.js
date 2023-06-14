import React, { Component } from "react";
import ListWithHeader from "./ListWithHeader";

class App extends Component {
  render() {
    return React.createElement(ListWithHeader, { header: "Shopping List", listType: "numbered" }, "Milk", "Eggs", "Honey");
  }
}

export default App;