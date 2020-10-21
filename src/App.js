// import React, { Component } from "react";

// //component
// import { SearchBox, List } from "./components";

// //contenxt

// import { TodoProvider } from "./context/todo";

// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <TodoProvider>
//         <div className="App my-5">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 offset-md-3">
//                 <div className="card shadow rounded">
//                   <div className="card-body">
//                     <h5 className="card-title">Todo List Apps</h5>
//                     <SearchBox />
//                     <List />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </TodoProvider>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./pages";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Todo Apps</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
