// import React from 'react'
import { createNewCanvas, addPrimitive } from "./functions";
import { EditorType, PrimitiveType } from "./types";

// const undoStack: Array<EditorType> = [];
// const redoStack: Array<EditorType> = [];

const editor: EditorType = createNewCanvas();
const primitive: PrimitiveType = {
  shape: "rectangle",
  fill: {
    r: 67,
    g: 10,
    b: 28,
    a: 255
  },
  border: {
    color: {
      r: 10,
      g: 67,
      b: 32,
      a: 255
    },
    width: 1
  },
  size: {
    w: 200,
    h: 100
  },
  topLeft: {
    x: 0,
    y: 0
  }
};
addPrimitive(editor, primitive);

export { editor };
