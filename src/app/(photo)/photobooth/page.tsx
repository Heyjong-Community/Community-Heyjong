'use client';

import FramePreview from '@/components/organism/FramePreview';
import Preview2 from '@/components/organism/Preview2';
import { Camera, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function PhotoBoothPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [photo, setPhoto] = useState<string[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  console.log('list foto = ', photo);

  // Nyalakan kamera saat komponen dimount
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }, // pakai kamera belakang jika tersedia
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.style.transform = 'scaleX(-1)';
        }

        setStream(stream);
        setIsCameraOn(true);
      } catch (err) {
        setError('Tidak dapat mengakses kamera. Pastikan izin telah diberikan.');
        console.error(err);
      }
    };

    startCamera();

    // Matikan kamera saat keluar halaman
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };

    // return () => {
    //   if (stream) {
    //     stream.getTracks().forEach((track) => track.stop());
    //   }
    // };
  }, []);

  const handleTakePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;

    // Sesuaikan ukuran canvas dengan video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      // setPhoto(dataUrl);
      setPhoto((prev) => (prev.length < 9 ? [...prev, dataUrl] : prev));
    }
  };

  // 🔹 Ambil ulang foto
  // const handleRetake = () => {
  //   setPhoto(null);
  // };

  const handleDeletePhoto = (index: number) => {
    setPhoto((prev) => prev.filter((_, i) => i !== index));
  };

  // const resetPhoto = () => {};
  // const downloadPhoto = () => {};

  return (
    <div className='h-screen max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center gap-5'>
      <div className='w-[170px] h-full'>
        <div className='rounded-xl p-5 bg-primary mt-20'>
          <p className='text-white text-sm text-center'>
            Nih, ada photobooth gratis untuk kalian. Selamat mencoba. Kalau ada kritik atau saran terkait fitur ini,
            bisa langsung sampein lewat chat Kak Dieni ya!!
          </p>
        </div>
      </div>
      <div className='max-w-xl space-y-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-stretch gap-3'>
            <select name='' id='' className='rounded-md border-2 text-sm border-[#e5e7eb] px-4 py-2'>
              <option value=''>1 Foto</option>
              <option value=''>2 Foto</option>
              <option value=''>3 Foto</option>
              <option value=''>4 Foto</option>
              <option value=''>4 Foto</option>
              <option value=''>9 Foto</option>
            </select>
            <select name='' id='' className='rounded-md border-2 text-sm border-[#e5e7eb] px-4 py-2'>
              <option value=''>3s Delay</option>
              <option value=''>5s Delay</option>
              <option value=''>10s Delay</option>
            </select>
          </div>
          <div className=''>
            <label className='border border-primary text-sm text-primary rounded-md px-4 py-2 flex items-center justify-center gap-2 cursor-pointer'>
              <input type='file' accept='.jpg, .jpeg, .png, .gif, .bmp, .webp' className='hidden' />
              <Camera className='size-6' />
              <span>Unggah Foto</span>
            </label>
            {/* <button className='border border-secondary text-sm text-secondary rounded-md px-4 py-2 flex items-center justify-center gap-2'>
              <Camera className='size-6' />
              <span>Unggah Foto</span>
            </button> */}
          </div>
        </div>
        <div className=''>
          <div className='overflow-hidden rounded-2xl border-2 border-[#e5e7eb]'>
            <video ref={videoRef} autoPlay playsInline muted className='' />
          </div>
        </div>
        <div className='mt-4'>
          {/* Tombol ambil foto */}
          <div className='mt-4'>
            <button
              onClick={handleTakePhoto}
              className='w-full bg-primary rounded-full px-4 cursor-pointer py-4 text-base font-medium text-white flex items-center justify-center gap-2'
            >
              <Camera className='size-7' />
              <span>Ambil Foto</span>
            </button>
          </div>
          {/* {!photo && (
            <button
              onClick={handleTakePhoto}
              className='w-full bg-primary rounded-full px-4 cursor-pointer py-4 text-base font-medium text-white flex items-center justify-center gap-2'
            >
              <Camera className='size-7' />
              <span>Mulai Foto</span>
            </button>
          )} */}
          {/* {photo && (
            <button
              onClick={handleRetake}
              className='w-full bg-secondary rounded-full px-4 cursor-pointer py-4 text-base font-medium text-white flex items-center justify-center gap-2'
            >
              <Camera className='size-7' />
              <span>Ambil Foto Ulang</span>
            </button>
          )} */}
        </div>
        <div className='mt-8'>
          {/* Single Photo */}
          {/* {photo && (
            <Image src={photo} width={500} height={500} alt='photo' className='rounded-2xl border-2 border-[#e5e7eb]' />
          )} */}

          {photo.length > 0 && (
            <div className='mt-8 grid grid-cols-3 gap-4'>
              {photo.map((pho, index) => (
                <div key={index} className='relative'>
                  <Image
                    src={pho}
                    width={200}
                    height={200}
                    alt={`photo-${index}`}
                    className='rounded-xl border-2 border-[#e5e7eb] object-cover'
                  />
                  <button
                    onClick={() => handleDeletePhoto(index)}
                    className='absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full'
                  >
                    <Trash2 className='size-4' />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='mt-8 h-full'>
          <FramePreview photos={photo} frameType='4' />
          {/* <Preview2 photos={photo} /> */}
          {/* {photo.length > 0 && (
            <div className='mt-8'>
            </div>
          )} */}
        </div>
        <div className='mt-8'>
          {/* Canvas untuk menangkap gambar (disembunyikan) */}
          <canvas ref={canvasRef} className='hidden' />
        </div>
      </div>
      <div className='w-[170px] max-w-[170px] h-full'>
        {/* Hasil Foto akan tampil dibawah ini */}
        {photo.length > 0 && (
          <div className='mt-8 grid grid-cols-1 gap-4'>
            {photo.map((pho, index) => (
              <div key={index} className='relative'>
                <Image
                  src={pho}
                  width={200}
                  height={200}
                  alt={`photo-${index}`}
                  className='rounded-xl border-2 border-[#e5e7eb] object-cover'
                />
                <button
                  onClick={() => handleDeletePhoto(index)}
                  className='absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full'
                >
                  <Trash2 className='size-4' />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
