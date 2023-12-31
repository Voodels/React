import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import FooterComponent from "./components/FooterComponent ";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import PostList from "./components/PostList";
import SideBarComponent from "./components/SideBarComponent";
import PostListProvider from "./store/post-list-store";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div>
          <HeaderComponent />
          <div
            className="container-fluid"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <SideBarComponent
              selectedTab={selectedTab}
              setSeletectTab={setSelectedTab}
            />
            <div>
              {/* <MainComponent /> */}
              <div></div>

              {selectedTab === "Home" ? (
                <div
                  className="container-fluid"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    direction: "column",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <PostList />
                </div>
              ) : (
                <CreatePost />
              )}
            </div>
          </div>
          <FooterComponent />
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
