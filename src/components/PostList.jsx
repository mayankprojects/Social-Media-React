import Post from "./Post";
import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";
import Welcome from "./Welcome";

export default function PostList() {
  const { postList, initialPost } = useContext(PostListContext);

  const handleOnclick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => initialPost(data));
  };

  return (
    <>
      {postList.length === 0 && <Welcome handleOnclick={handleOnclick} />}
      <div className="demo">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
