import { useEffect, useRef } from "react";
export function AsciiArt({
  src,
  resolution = 80,
  color = "#00ff00",
  animationStyle = "matrix",
  inverted = false,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => {
      const width = resolution;
      const height = Math.floor((img.height / img.width) * resolution);
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const chars = " .:-=+*#%@";
      ctx.fillStyle = color;
      ctx.font = "10px monospace";
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];

          let brightness = (r + g + b) / 3;
          if (inverted) brightness = 255 - brightness;

          const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
          const char = chars[charIndex];

          ctx.fillText(char, x * 8, y * 10);
        }
      }
      if (animationStyle === "matrix") {
        let offset = 0;
        setInterval(() => {
          ctx.fillStyle = "rgba(0,0,0,0.1)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = color;
          for (let x = 0; x < width; x++) {
            const y = (Math.random() * height) | 0;
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, x * 8, (y + offset) * 10);
          }
          offset = (offset + 1) % height;
        }, 100);
      }
    };
  }, [src, resolution, color, animationStyle, inverted]);
  return <canvas ref={canvasRef} className={className} />;
}
