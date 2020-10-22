/* export:
- providev
- consumer
*/

import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({ users: [], loading: true });

const UserProvider = (props) => {
  const { children } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  },[]);

  const userData = {
    getUser,
    data,
    loading,
  };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

// const UserConsumer = () => UserContext.Consumer;

export default { UserProvider, useUser, UserContext };
