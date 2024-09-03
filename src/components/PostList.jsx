import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/Post-list-store";
import Welcome from "./Welcome";
import Loading from "./Loading";

export default function PostList() {
  const { postList, fetching } = useContext(PostListContext);


  return (
    <>
      {fetching && <Loading></Loading>}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && (
        <div className="demo">
          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
