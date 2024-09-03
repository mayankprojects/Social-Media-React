import { useRef } from "react";
import { PostListContext } from "../store/Post-list-store";
import { useContext } from "react";

export default function CreatePost() {
  const { addPost } = useContext(PostListContext);

  const userIdEle = useRef();
  const postTitleEle = useRef();
  const postContentEle = useRef();
  const reactionsEle = useRef();
  const hashtagsEle = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdEle.current.value;
    const postTitle = postTitleEle.current.value;
    const postContent = postContentEle.current.value;
    const reactions = reactionsEle.current.value;
    const hashtags = hashtagsEle.current.value.split(" ");

    // userIdEle.current.value = "";
    // postTitleEle.current.value = "";
    // postContentEle.current.value = "";
    // reactionsEle.current.value = "";
    // hashtagsEle.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postContent,
        reactions: reactions,
        userId: userId,
        tags: hashtags,
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        addPost(resObj);
        // console.log(resObj.id);
      });
  };

  return (
    <>
      <form className="m-5 p-3 w-25 fw-semibold" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="UserId" className="form-label">
            Enter Your UserId
          </label>
          <input
            type="input"
            className="form-control"
            id="UserId"
            placeholder="Your UserId"
            ref={userIdEle}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PostTitle" className="form-label">
            Post Title
          </label>
          <input
            type="input"
            className="form-control"
            id="PostTitle"
            placeholder="How you are feeling today"
            ref={postTitleEle}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PostTitle" className="form-label">
            Post Content
          </label>
          <textarea
            type="input"
            className="form-control"
            id="PostTitle"
            rows="4"
            placeholder="How you are feeling today"
            ref={postContentEle}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PostReaction" className="form-label">
            Number of reactions
          </label>
          <input
            type="input"
            className="form-control"
            id="PostReaction"
            placeholder="How many people reacted to this post"
            ref={reactionsEle}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PostTags" className="form-label">
            Enter Your Hashtags Here
          </label>
          <input
            type="input"
            className="form-control"
            id="PostTags"
            placeholder="Please enter the tags using space"
            ref={hashtagsEle}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
