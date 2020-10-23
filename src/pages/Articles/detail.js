import React from "react";

import { useParams } from "react-router-dom";

// import { ArticleContentMaster } from "../../context";

// const { useArticle } = ArticleContentMaster;

const DetailArticle = () => {
  let { id } = useParams();
  console.log({ id });
  return <h3>detail here</h3>;
};

export default DetailArticle;
