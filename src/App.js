import React, { Component } from "react";

//component
import { SearchBox, List } from "./components";

//contenxt

import { TodoProvider } from "./context/todo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <TodoProvider>
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
      </TodoProvider>
    );
  }
}

export default App;
