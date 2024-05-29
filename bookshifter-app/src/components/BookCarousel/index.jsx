import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Importe PropTypes

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import BookCard from '../BookCard';

export default function BookCarousel({ books }) {
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);
      const containerWidth = cardRef.current.offsetWidth;
      const cardCount = Math.floor(containerWidth / cardRef.current.children[0].offsetWidth);
      setCardsVisible(cardCount);
    }
  }, []);

  const scrollLeft = () => {
    const slider = cardRef.current;
    const scrollAmount = cardWidth * cardsVisible;
    const newPosition = Math.max(0, slider.scrollLeft - scrollAmount);
    slider.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };
  
  const scrollRight = () => {
    const slider = cardRef.current;
    const scrollAmount = cardWidth * cardsVisible;
    const maxScrollLeft = slider.scrollWidth + slider.clientWidth;
    const newPosition = Math.min(maxScrollLeft, slider.scrollLeft + scrollAmount);
    slider.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className="relative max-w-[800px] mx-auto">
      <div className="overflow-hidden w-full" ref={cardRef}>
        <div className="flex transition-transform duration-300 ease-in-out translate-x-0">
          {books.map((book, index) => (
            <div key={index} className="w-full sm:w-1/5 p-4">
              <BookCard key={index} imgUrl={book.mediumCoverUrl} id={book.id} />
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        className=" absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollLeft}
       
      >
        <IoIosArrowDropleft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollRight}
      >
        <IoIosArrowDropright />
      </button>
    </div>
  );
}

// Defina as PropTypes
BookCarousel.propTypes = {
  books: PropTypes.array.isRequired, // books deve ser um array e obrigatório
};
