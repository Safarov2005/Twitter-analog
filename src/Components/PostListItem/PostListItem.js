import React from "react";
import "./PostListItem.css"

function PostListItem(props) {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-lebel">Hello World</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
}

export default PostListItem;
