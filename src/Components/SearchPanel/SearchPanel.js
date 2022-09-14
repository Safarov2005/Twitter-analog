import React from "react";
import "./SearchPanel.css"
function SearchPanel(props) {
  return (
    
      <input
        type="text"
        className="form-control search-input d-flex "
        placeholder="Search by posts"
      />

  );
}

export default SearchPanel;
