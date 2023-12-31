import { useContext, useState, useEffect } from "react";
import PostComponent from "./PostComponent";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingState from "./LoadingState";

const PostList = () => {
  const { postList, addPostMASSonLOAD } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  //creating an abort controller> this is used to cancel any pending request>used to delete server calls when the component is unmounted, this is done to avoid memory leaks
  //prp tip: always use abort controller when you are fetching data from an API >
  const controler = new AbortController();
  const signal = controler.signal;

  //fetching data from the API using useEffect hook
  useEffect(() => {
    //fetching data from the API
    setFetching(true); //set fetching to true
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data received from the API
        addPostMASSonLOAD(data.posts);
        setFetching(false); //data came so set fetching to false

        //use effect cleanup function
        return () => {
          console.log("cleanup function called");
          //cleanup function is called when the component is unmounted> this is used to cancel any pending request>used to delete server calls when the component is unmounted, this is done to avoid memory leaks, this is done by returning a function from the useEffect hook
          //freeing up the event listeners

          controler.abort();
          //aborting the fetch request> this will cancel the fetch request? this is done to avoid memory leaks> this is done by calling the abort method on the abort controller> this will cancel the fetch request>what is abort controller? this is used to cancel any pending request>used to delete server calls when the component is unmounted, this is done to avoid memory leaks
        };
      });
    //[] -> this is the dependency array which is empty so this will be called only once when the component is mounted
  }, []);

  //this should be called only once when the component is mounted we can use useEffect hook for this purpose

  //handeling the loading state

  return (
    <>
      {fetching && <LoadingState />}
      {postList.length === 0 && fetching == false && <WelcomeMsg />}
      {postList.map((post) => (
        <PostComponent
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          reaction={post.reaction}
          userId={post.userId}
          userName={post.userName}
          tags={post.tags}
        />
      ))}
    </>
  );
};

export default PostList;
