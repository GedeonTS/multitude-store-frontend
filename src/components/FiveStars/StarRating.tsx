import { useState } from "react";
import { IoMdStar } from "react-icons/io";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue as never)}
            />
            <IoMdStar
              key={i}
              className="star"
              size={20}
              color={ratingValue <= (hover as never || rating) ? "greenYellow" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue as never)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
