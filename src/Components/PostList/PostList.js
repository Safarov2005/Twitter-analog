import React from 'react';
import PostListItem from '../PostListItem';
import "./PostList.css"
function PostList(props) {
    return (
        <ul className='app-list list-group'>
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    );
}

export default PostList;