import React, { useRef, useEffect, useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import BookCard from '../BookCard';


export default function BookCarousel({ imgUrl }) {
  const imgCard = imgUrl;
  const books = Array.from({ length: 9 }, (_, i) => i);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);
    }
  }, []);

  const scrollLeft = () => {
    const slider = cardRef.current;
    slider.scrollTo({
      left: slider.scrollLeft - cardWidth,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    const slider = cardRef.current;
    slider.scrollTo({
      left: slider.scrollLeft + cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative max-w-[800px] mx-auto">
      <div className="overflow-hidden w-full" ref={cardRef}>
        <div className="flex transition-transform duration-300 ease-in-out translate-x-0">
          {books.map((book, index) => (
            <div key={index} className="w-full sm:w-1/5 p-4">
              <BookCard imgUrl={imgCard} />
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        className="text-buttonColor absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollLeft}
        disabled={cardRef.current?.scrollLeft === 0}
      >
        <IoIosArrowDropleft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollRight}
        disabled={cardRef.current?.scrollLeft >= cardRef.current?.scrollWidth - cardRef.current?.offsetWidth}
      >
        <IoIosArrowDropright />
      </button>
    </div>
  );
}
