import React, { Component } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import crossIcon from "@iconify/icons-entypo/cross";

const Item = () => {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
        <button
          className="btn btn-outline-danger btn-sm float-right"
          type="button"
          id="button-addon2"
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
      <ul className="list-group list-group-flush">
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }
}

export default Lists;
