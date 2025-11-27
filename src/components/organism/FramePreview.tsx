'use client';

import { jongFrames, jongFrames2 } from '@/utils/photoFrames';
import { useRef, useEffect, useState } from 'react';

interface FramePreviewProps {
  photos: string[];
  frameType?: keyof typeof jongFrames2; // contoh: '4' untuk frame 4 foto
}

export default function FramePreview({ photos, frameType = '4' }: FramePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current; // ✅ langkah 1
    if (!canvas) return;

    const ctx = canvas.getContext('2d'); // ✅ langkah 2
    if (!ctx) return;

    const frame = jongFrames2[frameType];
    if (!frame) {
      console.error(`Frame type "${frameType}" tidak ditemukan di photoFrames3`);
      return;
    }

    const frameImage = new Image();
    frameImage.src = frame.src;

    const render = async () => {
      // 1️⃣ Tunggu frame siap
      await new Promise<void>((resolve) => {
        frameImage.onload = () => resolve();
      });

      // 2️⃣ Set ukuran canvas sesuai frame
      canvas.width = frameImage.width;
      canvas.height = frameImage.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 3️⃣ Gambar frame terlebih dahulu (jika background frame solid)
      ctx.drawImage(frameImage, 0, 0, frameImage.width, frameImage.height);

      // 4️⃣ Gambar foto-foto ke slot sesuai posisi
      const photoPromises = frame.slots.map((slot, index) => {
        const photoSrc = photos[index];
        if (!photoSrc) return Promise.resolve();

        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = photoSrc;
          img.onload = () => {
            // 🔹 Hitung rasio agar foto tetap proporsional
            const ratio = Math.min(slot.width / img.width, slot.height / img.height);
            const newWidth = img.width * ratio;
            const newHeight = img.height * ratio;

            // 🔹 Posisi agar tetap di tengah slot
            const offsetX = slot.x + (slot.width - newWidth) / 2;
            const offsetY = slot.y + (slot.height - newHeight) / 2;

            ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
            resolve();
          };
        });
      });

      await Promise.all(photoPromises);

      // 5️⃣ Gambar frame lagi di atas jika ada border transparan (overlay)
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
      {/* <canvas ref={canvasRef} className='rounded-2xl border-2 border-gray-300 shadow-lg w-full h-auto' /> */}
      <canvas ref={canvasRef} className='max-w-full h-auto' />
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
