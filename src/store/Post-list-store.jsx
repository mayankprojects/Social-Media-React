import { createContext, useReducer, useState, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD") {
    newPostList = [action.payload.post, ...currPostList];
  } else if (action.type === "INITIAL") {
    newPostList = action.payload.data;
  }

  return newPostList;
};

export default function PostListProvider({ children }) {
  const [postList, setPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    const actionObj = {
      type: "ADD",
      payload: {
        post,
      },
    };
    setPostList(actionObj);
  };

  const deletePost = (postId) => {
    const actionObj = {
      type: "DELETE",
      payload: {
        postId,
      },
    };
    setPostList(actionObj);
  };

  const initialPost = (data) => {
    const actionObj = {
      type: "INITIAL",
      payload: {
        data: data.posts,
      },
    };
    setPostList(actionObj);
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(
        (data) => {
          initialPost(data);
          setFetching(false);
        },
        { signal }
      );

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, fetching}}
    >
      {children}
    </PostListContext.Provider>
  );
}

const DEFAULT_POST_LIST = [
  // {
  //   id: "1",
  //   title: "Going to Mumbai",
  //   body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
  //   reactions: 2,
  //   userId: "user-9",
  //   tags: ["vacation", "Mumbai", "Enjoying"],
  // },
  // {
  //   id: "2",
  //   title: "Paas ho gya bhai",
  //   body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
  //   reactions: 15,
  //   userId: "user-12",
  //   tags: ["Graduating", "Unbelievable"],
  // },
  // {
  //   id: "5",
  //   title: "Paas ho gya bhai",
  //   body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
  //   reactions: 15,
  //   userId: "user-12",
  //   tags: ["Graduating", "Unbelievable"],
  // },
  // {
  //   id: "3",
  //   title: "Paas ho gya bhai",
  //   body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
  //   reactions: 15,
  //   userId: "user-12",
  //   tags: ["Graduating", "Unbelievable"],
  // }
];
