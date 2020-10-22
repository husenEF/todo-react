import React, { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext({ data: [], loading: true });

const ArticleProvider = (props) => {
  const { children } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
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

  const ArticleData = {
    data,
    loading,
  };

  return (
    <ArticleContext.Provider value={ArticleData}>
      {children}
    </ArticleContext.Provider>
  );
};

const useArticle = () => useContext(ArticleContext);

export default { ArticleProvider, ArticleContext, useArticle };
