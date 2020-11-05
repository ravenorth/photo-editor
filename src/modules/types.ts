import React from 'react';

// type EditorType = {
//   canvas: CanvasType;
//   currentObject: TextType | PrimitiveType | SelectionType | ImageType | null;
// }

// type CanvasType = {
//   size: SizeType;
//   pixels: PixelsType;
// }

// type PixelsType = Array<Array<RGBAType>>

// type RGBAType = {
//   r: number;
//   g: number;
//   b: number;
//   a: number;
// }

// type SelectionType = {
//   size: SizeType;
//   topLeft: CoordinatesType;
// }

// type ImageType = CanvasType & {
//   topLeft: CoordinatesType;
// }

// type SizeType = {
//   w: number;
//   h: number;
// }

// type CoordinatesType = {
//   x: number;
//   y: number;
// }

// type FilterType = 'grey' | 'red' | 'blue' | 'green';

// type TextType = {
//   value: string;
//   fontSize: number;
//   color: RGBAType;
//   font: string;
//   topLeft: CoordinatesType;
//   size: SizeType;
// }

// type PrimitiveType = {
//   shape: 'circle' | 'rectangle' | 'triangle';
//   fill: RGBAType | null;
//   border: BorderType | null;
//   size: SizeType;
//   topLeft: CoordinatesType;
// }

// type BorderType = {
//   color: RGBAType;
//   width: number;
// }

// export { 
//   EditorType, 
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
// }