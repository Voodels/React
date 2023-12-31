import "./Wcm.css";

const WelcomeMsg = ({ onGetPostsClick }) => {
  return (
    <div
      className=" container-fluid
      cnt
    "
    >
      <h1
        className="TextCmp
      container-fluid
      text-center
      text-primary
      
      flex
        "
      >
        Welcome to the Social Media App There are no posts yet
      </h1>

      <button
        className="btn btn-primary
      btn-lg btn-block
      btn-outline-light
      "
        onClick={onGetPostsClick}
      >
        Fetch Posts
      </button>
    </div>
  );
};
export default WelcomeMsg;
