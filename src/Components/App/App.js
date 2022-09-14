import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css"
function App(props) {
  return (
    <div className="app">
      <AppHeader />
      <div  className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter/>
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
}

export default App;
