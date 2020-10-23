import React from "react";

import { ArticleContentMaster } from "../../context";

const { useArticle } = ArticleContentMaster;

const ListArticles = () => {
  const { data } = useArticle();
  console.log({ data });
  return <h3>list here</h3>;
};

export default ListArticles;
