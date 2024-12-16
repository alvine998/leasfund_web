import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";

type AutoSlideProps = {
  images: string[]; // Array of image URLs
};

const AutoSlide: React.FC<AutoSlideProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let index = 0;
    const slide = () => {
      if (!carousel) return;

      index = (index + 1) % images.length;
      const offset = -(index * 100); // Translate carousel by index
      carousel.style.transform = `translateX(${offset}%)`;
    };

    const interval = setInterval(slide, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="overflow-hidden relative w-full h-full lg:pt-10 pt-16">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 lg:top-1/2 top-32 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        <ChevronLeftIcon className="lg:w-10 w-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 lg:top-1/2 top-32 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        <ChevronRightIcon className="lg:w-10 w-4" />
      </button>
    </div>
  );
};

export default AutoSlide;
