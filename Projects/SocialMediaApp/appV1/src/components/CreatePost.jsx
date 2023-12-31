import { useContext, useRef } from "react";
import "./CreatePost.css";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const postTitle = useRef();
  const postCaption = useRef();
  const postTags = useRef();
  const postImage = useRef();

  const clearRef = () => {
    postTitle.current.value = "";
    postCaption.current.value = "";
    postTags.current.value = "";
    postImage.current.value = "";
  };

  const handelSubmit = () => {
    const post = {
      title: postTitle.current.value,
      caption: postCaption.current.value,
      tags: postTags.current.value,
      image: postImage.current.value,
    };

    console.log("post data ", post.title, post.caption, post.tags, post.image);
    addPost(post);
    clearRef(); // Invoke the clearRef function
  };

  return (
    <>
      <form
        className="container my-5 border m-3 p-3
      "
        onSubmit={handelSubmit}
      >
        <div className="mb-3 ">
          <label typeof="text" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={postTitle}
          />
          <div id="" className="form-text">
            Enter the title of your post
          </div>
          <label
            className="form-label 
            mt-1
          "
          >
            Post caption
          </label>
          <input
            ref={postCaption}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Enter the Caption of your post
          </div>
          <label
            className="form-label 
            mt-1
          "
          >
            Post tags
          </label>
          <input
            ref={postTags}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Enter the tags of your post
          </div>
        </div>
        <div>
          <label
            htmlFor="exampleInputEmail1"
            className="form-label 
            mt-1
          "
          >
            Post Image
          </label>
          <input
            ref={postImage}
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Upload the image for your post
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "10px" }}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default CreatePost;
