import React, { Component } from "react";

import { UserContextMaster } from "../../context";

const { UserContext } = UserContextMaster;

class User2 extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(value) => {
          console.log({ value });
          return <h1>User 2</h1>;
        }}
      </UserContext.Consumer>
    );
  }
}

export default User2;
