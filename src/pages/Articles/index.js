import React from "react";

import { ArticleContentMaster } from "../../context";

const { useArticle } = ArticleContentMaster;

const Articles = (props) => {
  const { data, loading } = useArticle();
  if (loading) return <h5>Loading ...articles</h5>;
  return (
    <div className="card-container clearfix row my-5">
      <div className="col-12">
        <h3>Articles</h3>
      </div>

      {data.map((e, i) => {
        return (
          <div className="col-4 mb-5" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.body}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
