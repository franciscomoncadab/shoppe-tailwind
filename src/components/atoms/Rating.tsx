import React, { useState }from "react";

interface Props {
  color: string;
}
const Rating = (props: Props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
               type="button"
               key={index}
               className={`bg-transparent border-none outline-none cursor-pointer ${index <= (hover || rating) ? "text-black" : props.color }`}
               onClick={() => setRating(index)}
               onMouseEnter={() => setHover(index)}
               onMouseLeave={() => setHover(rating)}
          >
            <span className="star text-2xl mr-[8px]">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
