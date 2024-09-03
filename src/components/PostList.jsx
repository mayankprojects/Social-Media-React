import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/Post-list-store";
import Welcome from "./Welcome";
import Loading from "./Loading";

export default function PostList() {
  const { postList, initialPost } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        initialPost(data);
        setFetching(false);
      }, {signal});

      return () => {
         console.log("abort fetching");
         controller.abort();  
      }
  }, []);

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
