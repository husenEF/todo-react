import React, { Component } from "react";
import { Icon } from "@iconify/react";
import crossIcon from "@iconify/icons-entypo/cross";

//context
import { TodoConsumer } from "../../context/todo";

import "./style.scss";

const Item = ({ data, onCompled, onDelete }) => {
  const myClass = data.completed ? "completed" : "";
  return (
    <li className={`list-group-item ${myClass}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={`check-${data.id}`}
          onClick={() => onCompled(data.id)}
        />
        <label className={`form-check-label`} htmlFor={`check-${data.id}`}>
          {data.title}
        </label>
        <button
          className="btn btn-outline-danger btn-sm float-right"
          type="button"
          id="button-addon2"
          onClick={() => onDelete(data.id)}
        >
          <Icon icon={crossIcon} />
        </button>
      </div>
    </li>
  );
};
class Lists extends Component {
  render() {
    return (
      <TodoConsumer>
        {(todo) => {
          const { list, removeList, finishList } = todo;
          console.log({ list });
          return (
            <ul className="list-group list-group-flush">
              {list.map((d, i) => (
                <Item
                  data={d}
                  onCompled={(id) => finishList(id)}
                  onDelete={(id) => removeList(id)}
                  key={i}
                />
              ))}
            </ul>
          );
        }}
      </TodoConsumer>
    );
  }
}

export default Lists;
