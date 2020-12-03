import React, { useRef, useEffect } from "react";
import css from "./styles.module.scss";
import mock from "./mock.jpg";

export const Canvas = () => {
  const { container } = css;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const { current: canvas } = canvasRef;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.src = mock;
        img.addEventListener(
          "load",
          () => {
            let alignmentDeviation = 0;
            
            // Define vertical or horizontal position
            const { naturalWidth, naturalHeight } = img;
            if(naturalWidth > naturalHeight) {
              ctx.canvas.width = naturalWidth;
              ctx.canvas.height = naturalHeight;
            } else {
              ctx.canvas.width = naturalHeight;
              ctx.canvas.height = naturalWidth;
              const { offsetWidth } = ctx.canvas;
              alignmentDeviation = offsetWidth - naturalWidth / 2;
            }

            ctx.drawImage(
              img,
              alignmentDeviation,
              0,
              naturalWidth,
              naturalHeight,
            );
          },
          false
        );
      }
    }
  });

  return (
    <section>
      <canvas ref={canvasRef} className={container} />
    </section>
  );
};
