import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <Header></Header>
        <div className="d-flex">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        </div>
        <Footer></Footer>
      </PostListProvider>
    </>
  );
}

export default App;
