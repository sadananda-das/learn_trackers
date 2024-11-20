import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Entry />
      </div>
    );
  }
}
