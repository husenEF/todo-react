import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { ArticleContentMaster } from "../../context";

import List from "./list";
import Detail from "./detail";

const { useArticle } = ArticleContentMaster;

const Articles = (props) => {
  const { loading, data } = useArticle();
  if (loading) return <h5>Loading ...articles</h5>;
  return (
    <div className="card-container clearfix row my-5">
      <div className="col-12">
        <h3>Articles</h3>
      </div>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="detail/:id">
          <Detail />
        </Route>
      </Switch>
      {data.map((e, i) => {
        return (
          <div className="col-4 mb-5" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.body}</p>
                <Link
                  to={`/articles/detail/${e.id}`}
                  className="btn btn-primary"
                >
                  go detaial
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
