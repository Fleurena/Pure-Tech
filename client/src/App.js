import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Routing from "./components/route/route";

axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Routing />;
  }
}

export default App;
