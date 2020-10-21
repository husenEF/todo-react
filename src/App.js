import React, { Component } from "react";

import { SearchBox, List } from "./components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card shadow rounded">
                <div className="card-body">
                  <h5 className="card-title">Todo List Apps</h5>
                  <SearchBox />
                  <List />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
