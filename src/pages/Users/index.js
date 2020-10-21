import React, { useContext, useEffect, useState } from "react";
import "./styles.css";

export default function User() {
  return (
    <div className="App">
      <TestApp />
      <hr />
      <UserProvider>
        <TestApp2 />
      </UserProvider>
    </div>
  );
}

const TestApp = () => {
  const { loading, data } = useFetch("users");
  if (loading) return <div> Loading ........................</div>;
  return (
    <div>
      {data.map((item) => (
        <li>{item.name} </li>
      ))}
    </div>
  );
};

const TestApp2 = () => {
  const { loading, data } = useUser();
  if (loading) return <div> Loading ........................</div>;
  return (
    <div>
      {data.map((item) => (
        <li>{item.name} </li>
      ))}
    </div>
  );
};


const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${url}`
      );
      const data = await response.json();
      setData(data);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return React.useMemo(() => ({ data, loading }), [data, loading]);
};

const UserContext = React.createContext({ users: [], loading: true });

const UserProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
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
    getUsers();
  }, []);
  const useDataValue = React.useMemo(() => ({ getUsers, data, loading }), [
    loading,
    data,
  ]);
  return (
    <UserContext.Provider value={useDataValue}>{children}</UserContext.Provider>
  );
};
const useUser = () => useContext(UserContext);
