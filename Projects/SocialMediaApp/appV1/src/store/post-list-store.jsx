import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPostMASSonLOAD: () => {},
});
const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    const updatedPostList = currPostList.filter(
      (post) => post.id !== action.payload
    );
    return updatedPostList;
  } else if (action.type === "ADD_POST") {
    const updatedPostList = [...currPostList, action.payload];
    return updatedPostList;
  }
  if (action.type === "ADD_POST_MASS") {
    currPostList = action.payload.posts;
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    console.log("PostListProvider -> post", post);
    console.log(
      "post data ",
      post.title,
      post.content,
      post.reaction,
      post.userId,
      post.userName,
      post.tags
    );
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: postList.length + 1,
        title: post.title,
        content: post.content,
        reaction: post.reaction,
        userId: post.userId,
        userName: post.userName,
        tags: post.tags,
        img: post.img,
      },
    });
  };

  const addPostMASSonLOAD = (posts) => {
    dispatchPostList({
      type: "ADD_POST_MASS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({ type: "DELETE_POST", payload: postID });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList || [], // Add a null check here
        addPost: addPost,
        deletePost: deletePost,
        addPostMASSonLOAD: addPostMASSonLOAD,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
