import React, { useEffect, useRef } from 'react'

type RGBAType = {
  r: number;
  g: number;
  b: number;
  a: number;
}
const newCanvas= new Array<Array<RGBAType>>(600);
  for (let i = 0; i < 600; i++) {
    newCanvas[i] = new Array<RGBAType>(800);
    for (let j = 0; j < 800; j++) {
      newCanvas[i][j] = {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
      }
    }
  }

interface ButtonProps {
  text: string,
  // fn:  () => void,
  // onClick: stateManager,
}

interface CanvasProps {
  w: number,
  h: number,
}

function Button(props: ButtonProps) {
  return (
    <button>{props.text}</button>
  )
}

function Canvas(props: CanvasProps) {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
   
  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current;
      let pixel: ImageData = ctx!.createImageData(1, 1);;
      for (let i = 0; i < 600; i++) {
        for (let j = 0; j < 800; j++) {
          pixel.data[0] = newCanvas[i][j].r;
          pixel.data[1] = newCanvas[i][j].g;
          pixel.data[2] = newCanvas[i][j].b;
          pixel.data[3] = newCanvas[i][j].a;
          ctx!.putImageData(pixel, j, i);
        }
      }
      // currentobj
    }
  });
  
  return (
      <canvas ref={canvasRef} width={props.w} height={props.h} id="Canvas" ></canvas>
  )
}

export {
  Button,
  Canvas,
}
