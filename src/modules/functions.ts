// import React from 'react';
// export * from "./types";
// import { 
//   // EditorType, 
//   CanvasType,
//   PixelsType,
//   RGBAType,
//   SelectionType, 
//   ImageType,
//   SizeType,
//   CoordinatesType,
//   FilterType,
//   TextType,
//   PrimitiveType,
//   BorderType, 
// } from './types';
// import EditorType from "./types"

type EditorType = {
  canvas: CanvasType;
  currentObject: TextType | PrimitiveType | SelectionType | ImageType | null;
}

type CanvasType = {
  size: SizeType;
  pixels: PixelsType;
}

type PixelsType = Array<Array<RGBAType>>

type RGBAType = {
  r: number;
  g: number;
  b: number;
  a: number;
}

type SelectionType = {
  size: SizeType;
  topLeft: CoordinatesType;
}

type ImageType = CanvasType & {
  topLeft: CoordinatesType;
}

type SizeType = {
  w: number;
  h: number;
}

type CoordinatesType = {
  x: number;
  y: number;
}

type FilterType = 'grey' | 'red' | 'blue' | 'green';

type TextType = {
  value: string;
  fontSize: number;
  color: RGBAType;
  font: string;
  topLeft: CoordinatesType;
  size: SizeType;
}

type PrimitiveType = {
  shape: 'circle' | 'rectangle' | 'triangle';
  fill: RGBAType | null;
  border: BorderType | null;
  size: SizeType;
  topLeft: CoordinatesType;
}

type BorderType = {
  color: RGBAType;
  width: number;
}

function undo(editor: EditorType, undoStack: Array<EditorType>, redoStack: Array<EditorType>): EditorType | undefined {
  redoStack.push(editor);
  return undoStack.pop();
}

function redo(editor: EditorType, undoStack: Array<EditorType>, redoStack: Array<EditorType>): EditorType | undefined {
  undoStack.push(editor)
  return redoStack.pop();
}

function addHistoryState(editor: EditorType, undoStack: Array<EditorType>) {
  undoStack.push(editor);
}

function createNewCanvas(size: SizeType = {w: 800, h: 600}): EditorType {      //this
  const newCanvas: PixelsType = new Array<Array<RGBAType>>(size.h);
  for (let i = 0; i < size.h; i++) {
    newCanvas[i] = new Array<RGBAType>(size.w);
    for (let j = 0; j < size.w; j++) {
      newCanvas[i][j] = {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
      }
    }
  }
  return {
    canvas: {
      pixels: newCanvas,
      size,
    },
    currentObject: null,
  };
}

function importImage(editor: EditorType, image: ImageType): EditorType {               //this
  return {
    ...editor,
    // canvas: {
    //   ...editor.canvas,
    //   pixels: image.pixels,
    //   size: image.size,
    // },
    currentObject: image,
  };
}

function select(editor: EditorType, selection: SelectionType): EditorType {
  return{
    ...editor,
    currentObject: selection,
  };
}

function moveCurrentObject(editor: EditorType, coordinates: CoordinatesType): EditorType {           //if selection
  if (editor.currentObject) return {
    ...editor,
    currentObject: {
      ...editor.currentObject,
      topLeft: coordinates,
    }
  };
  return editor;
}

function deleteCurrentObject(editor: EditorType): EditorType {
  return {
    ...editor,
    currentObject: null,
  };
}

function cutSelection(editor: EditorType): EditorType {                             //this
  if (editor.currentObject) {
    const newSelection: PrimitiveType = {
      shape: 'rectangle',
      fill: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
      border: null,
      size: { ...editor.currentObject.size},
      topLeft: { ...editor.currentObject.topLeft}
    };
    return {
      ...editor,
      currentObject: newSelection,
    };
  };
  return editor;
}

function resizeCurrentObject(editor: EditorType, size: SizeType): EditorType {
  if (editor.currentObject) return {
    ...editor,
    currentObject: {
      ...editor.currentObject,
      size
    }
  };
  return editor;
}

function addText(editor: EditorType, text: TextType): EditorType {
  return {
    ...editor,
    currentObject: text,
  };
}

function addPrimitive(editor: EditorType, primitive: PrimitiveType): EditorType {
  return {
    ...editor,
    currentObject: primitive,
  };
}

function applyFilter(editor: EditorType, filter: FilterType): EditorType {            //this too
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      pixels: []
    }
  };
}

function exportImage(canvas: CanvasType): CanvasType {
  return canvas;
}

export {
  undo,
  redo,
  addHistoryState,
  createNewCanvas,
  importImage,
  select,
  moveCurrentObject,
  deleteCurrentObject,
  cutSelection,
  addText,
  addPrimitive,
  resizeCurrentObject,
  applyFilter,
  exportImage,
}