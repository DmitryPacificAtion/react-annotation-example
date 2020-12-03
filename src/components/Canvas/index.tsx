import { useRef, useEffect, useState } from "react";
import css from "./styles.module.scss";
import mock from "./mock2.jpg";

function preventContextMenuOpen(this: GlobalEventHandlers, e: MouseEvent) {
  e.preventDefault();
}

export const Canvas = () => {
  const { container } = css;
  const ref = useRef<HTMLCanvasElement>(null);
  
  const onCanvasLoad = (
    img: HTMLImageElement,
    ctx: CanvasRenderingContext2D
  ) => () => {
    let alignmentDeviation = 0;

    // Define vertical or horizontal position
    const { naturalWidth, naturalHeight } = img;
    if (naturalWidth > naturalHeight) {
      ctx.canvas.width = naturalWidth;
      ctx.canvas.height = naturalHeight;
    } else {
      ctx.canvas.width = naturalHeight;
      ctx.canvas.height = naturalWidth;
      const { offsetWidth } = ctx.canvas;
      alignmentDeviation = offsetWidth - naturalWidth / 2;
    }

    ctx.drawImage(img, alignmentDeviation, 0, naturalWidth, naturalHeight);
  };

  function onDragStart(this: any, e: MouseEvent) {
    if (e.button === 0) {
      this.onmousemove = onDragMove;
      this.onclick = onClick;
      console.log("start");
    }
  }

  function onDragMove(this: any, e: MouseEvent) {
    this.onclick = null;
    const ctx = this.getContext('2d');
    console.log("move", ctx.translate);
  }

  function onDragStop(this: any, e: MouseEvent) {
    if (e.button === 0) {
      this.onmousemove = null;
      console.log("stop");
    }
  }

  function onClick(this: any, e: MouseEvent) {
    if (e.button === 0) {
      console.log("click");
    }
  }

  useEffect(() => {
    window.addEventListener("contextmenu", preventContextMenuOpen);

    const img = new Image();
    let canvasRef: HTMLCanvasElement;
    if (ref && ref.current) {
      canvasRef = ref.current;
      const ctx = canvasRef.getContext("2d");
      if (ctx) {
        img.src = mock;
        img.addEventListener("load", onCanvasLoad(img, ctx), false);
      }

      canvasRef.addEventListener('mousedown', onDragStart);
      canvasRef.addEventListener('mouseup', onDragStop);
    }
    return () => {
      window.addEventListener("contextmenu", preventContextMenuOpen);
      if(canvasRef) {
        canvasRef.removeEventListener('mousedown', onDragStart);
        canvasRef.removeEventListener('mouseup', onDragStop);
      }
    };
  });

  return (
    <section>
      <canvas ref={ref} className={container} />
    </section>
  );
};
