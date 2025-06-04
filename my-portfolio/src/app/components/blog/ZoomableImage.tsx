'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ZoomableImageProps {
  src: string;
  alt: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div onClick={() => setZoomed(true)} className="cursor-zoom-in my-8">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {zoomed && (
        <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/30 flex items-center justify-center">
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-25 right-25 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
          >
            ✕
          </button>
          <Image
            src={src}
            alt={`Zoomed - ${alt}`}
            width={600}
            height={600}
            className="rounded-lg max-h-[90vh] max-w-[90vw] shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
