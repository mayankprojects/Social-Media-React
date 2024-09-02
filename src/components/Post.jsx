import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store"

export default function Post({ post }) {

  const {deletePost} = useContext(PostListContext);
  return (
    <>
      <div className="card p-3 m-5" style={{ width: "19rem", height: "auto" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary m-1">
              {tag}
            </span>
          ))}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{cursor: "pointer"}}>
            <MdDelete onClick={() => deletePost(post.id)} />
          </span>
          <div className="alert alert-success mt-2" role="alert">
            {`Your post has ${post.reactions} reactions`}
          </div>
        </div>
      </div>
    </>
  );
}
