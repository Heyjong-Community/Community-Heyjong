import React, { useEffect, useRef } from 'react';

interface Preview2Props {
  photos: string[];
}

export default function Preview2({ photos = [] }: Preview2Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const slots = [
    { x: 50, y: 50, width: 400, height: 500 },
    { x: 550, y: 50, width: 400, height: 500 },
    { x: 50, y: 600, width: 400, height: 500 },
    { x: 550, y: 600, width: 400, height: 500 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1000;
    canvas.width = 1200;

    ctx.fillStyle = '#eee';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    slots.forEach((slot) => {
      ctx.strokeRect(slot.x, slot.y, slot.width, slot.height);
    });

    // load gambar di canvas
    slots.forEach((slot, i) => {
      if (!photos[i]) return;

      const img = new Image();
      img.src = photos[i];

      img.onload = () => {
        const ratio = Math.min(slot.width / img.width, slot.height / img.height);

        const newWidth = img.width * ratio;
        const newHeight = img.height * ratio;

        const offsetX = slot.x + (slot.width - newWidth) / 2;
        const offsetY = slot.y + (slot.height - newHeight) / 2;

        ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      };
    });
  }, [photos]);

  return <canvas ref={canvasRef} className='max-w-full h-96 border' />;
}
