import React, { useEffect, useRef } from "react";
import { editor } from "../modules/new_editor";
import { CanvasType } from "../modules/types";

// type RGBAType = {
//   r: number;
//   g: number;
//   b: number;
//   a: number;
// }
// const newCanvas= new Array<Array<RGBAType>>(600);
//   for (let i = 0; i < 600; i++) {
//     newCanvas[i] = new Array<RGBAType>(800);
//     for (let j = 0; j < 800; j++) {
//       newCanvas[i][j] = {
//         r: 255,
//         g: 255,
//         b: 255,
//         a: 255,
//       }
//     }
//   }

interface ButtonProps {
  text: string;
  // fn:  () => void,
  // onClick: stateManager,
}

interface CanvasProps {
  canvas: CanvasType;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>;
}

function Canvas(props: CanvasProps) {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasCtxRef.current;
      let pixel: ImageData = ctx!.createImageData(1, 1);
      for (let i = 0; i < editor.canvas.size.h; i++) {
        for (let j = 0; j < editor.canvas.size.w; j++) {
          pixel.data[0] = props.canvas.pixels[i][j].r;
          pixel.data[1] = props.canvas.pixels[i][j].g;
          pixel.data[2] = props.canvas.pixels[i][j].b;
          pixel.data[3] = props.canvas.pixels[i][j].a;
          ctx!.putImageData(pixel, j, i);
        }
      }
      // currentobj
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={props.canvas.size.w}
      height={props.canvas.size.h}
      id="Canvas"
    ></canvas>
  );
}

export { Button, Canvas };
