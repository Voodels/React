import { useContext } from "react";
import "./PostComponent.css";
import { AiFillDelete } from "react-icons/ai";
import { PostList as PostListFrmStore } from "../store/post-list-store";
const PostComponent = ({
  id,
  title,
  content,
  reaction,
  userId,
  userName,
  tags,
  img,
}) => {
  const { deletePost } = useContext(PostListFrmStore);

  return (
    <>
      <div
        className="card
        post-card"
        style={{ width: "18rem" }}
      >
        <span
          className="
          position-absolute
          top-0
          start-100
          translate-middle
          badge
          rounded-pill
          bg-danger
          
        "
          onClick={() => deletePost(id)}
        >
          <AiFillDelete
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log("Delete Post");
            }}
            size={20}
          />
        </span>
        <img
          src={`https://picsum.photos/200/300` || img}
          className="card-img-top
            p-3 mb-2 
            container  border  p-3
          "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {content}
            <br />
            <br />
            <span
              className="badge

              rounded-pill bg-primary  

            "
            >
              {"#" + tags[0]}
            </span>
            <span className="badge rounded-pill bg-primary">
              {"#" + tags[1]}
            </span>
          </p>
          <p className="card-text">
            <small className="text-muted">
              <a href="#">{userName}</a>
            </small>
          </p>

          <a href="#" className="btn btn-primary">
            {reaction} {reaction === 1 ? "Like" : "Likes"}
          </a>
        </div>
      </div>
    </>
  );
};
export default PostComponent;
