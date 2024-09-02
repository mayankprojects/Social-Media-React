import Post from "./Post";
import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";

export default function PostList() {
  const { postList } = useContext(PostListContext);

  return (
    <>
      <div className="demo">
        {postList.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
}
