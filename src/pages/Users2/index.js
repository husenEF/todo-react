import React, { Component } from "react";

import { UserContextMaster } from "../../context";

const { UserContext } = UserContextMaster;

class User2 extends Component {
  listUser = (data) => {
    return (
      <ul>
        {data.map((e, i) => (
          <li key={i}>
            {e.name} - {e.email}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <UserContext.Consumer>
        {(value) => {
          const { data, loading } = value;
          if (loading) return <h4>Loading.......</h4>;
          return this.listUser(data);
        }}
      </UserContext.Consumer>
    );
  }
}

export default User2;
