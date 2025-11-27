'use client';

import { photoFrames } from '@/utils/photoFrames';
import { useRef, useEffect, useState } from 'react';

interface FramePreviewProps {
  photos: string[];
  frameType?: string; // contoh: '4' untuk frame 4 foto
}

export default function FramePreview({ photos, frameType = '4' }: FramePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frame = photoFrames[frameType as keyof typeof photoFrames];
    if (!frame) {
      console.error(`Frame type "${frameType}" tidak ditemukan di photoFrames`);
      return;
    }

    const frameImage = new Image();
    frameImage.src = frame.src;

    // Jalankan async agar mudah handle timing
    const render = async () => {
      // 1️⃣ Tunggu frame siap
      await new Promise<void>((resolve) => {
        frameImage.onload = () => resolve();
      });

      canvas.width = frameImage.width;
      canvas.height = frameImage.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 2️⃣ Siapkan semua foto
      const photoPromises = frame.slots.map((slot, index) => {
        const photoSrc = photos[index];
        if (!photoSrc) return Promise.resolve();

        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = photoSrc;
          img.onload = () => {
            console.log(`Menggambar foto ke slot ${index}:`, slot, photoSrc.slice(0, 50));
            ctx.drawImage(img, slot.x, slot.y, slot.width, slot.height);
            resolve();
          };
        });
      });

      // 3️⃣ Tunggu semua foto selesai digambar
      await Promise.all(photoPromises);

      // 4️⃣ Baru gambar frame di paling atas
      ctx.drawImage(frameImage, 0, 0, frameImage.width, frameImage.height);

      setIsLoaded(true);
    };

    render();
  }, [photos, frameType]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'hasil-photo-booth.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className='space-y-3 text-center'>
      <canvas ref={canvasRef} className='rounded-2xl border-2 border-gray-300 shadow-lg' />
      {isLoaded && (
        <button
          onClick={handleDownload}
          className='bg-primary text-white px-5 py-2 rounded-full hover:opacity-80 transition'
        >
          Download Hasil
        </button>
      )}
    </div>
  );
}
