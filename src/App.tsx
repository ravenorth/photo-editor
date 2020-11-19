import React from "react";
import "./App.css";
import "./view/Editor.css";
import { Button, Canvas } from "./view/Editor";
import { editor } from "./modules/new_editor";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Button text={"New canvas"} />
        <Button text={"Import image"} />
        {/* <a download="image.jpg" href=""> */}
        <Button text={"Export image"} />
        {/* </a> */}
        <Button text={"Edit"} /> {/* undo, redo, delete, cut, copy/paste?,  */}
        <Button text={"Filter"} /> {/* resize, filter, rotate? */}
      </header>
      <div className="Workspace">
        <div className="ToolBar">
          <Button text={"Hand"} />
          <Button text={"Select"} />
          <Button text={"Text"} />
          <Button text={"Rectangle"} />
          <Button text={"Triangle"} />
          <Button text={"Circle"} />
          <Button text={"Color"} />
        </div>
        <div className="Canvas">
          <Canvas canvas={editor.canvas} />
        </div>
      </div>
    </div>
  );
}

export default App;
