import { Component, createEffect } from "solid-js";
import Split from "split.js";

import Modal from "./components/Modal";
import RightSidePanel from "./components/Layout/RightSidePanel";
import AppBar from "./components/AppBar/Index";
import LeftSidePanel from "./components/Layout/LeftSidePanel";
import UserPostContainer from "./components/Layout/UserPostContainer";

const App: Component = () => {
  createEffect(() => {
    Split(["#split-0", "#split-1"], {
      sizes: [50, 500],
      gutterSize: 50,
      expandToMin: true,
    });
  });

  return (
    <div class="min-w-[100vw] min-h-[100vh] h-full w-full flex overflow-hidden relative">
      <AppBar />

      <LeftSidePanel />

      <UserPostContainer />

      <RightSidePanel />

      <Modal />
    </div>
  );
};

export default App;
