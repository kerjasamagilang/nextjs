import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  const totalRating = [];

  for (let i = 1; i < 5; i++) {
    if (i < totalRating) {
      totalRating.push(
        <li className="start" key={i}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="start-o" key={i}>
          <FaStar />
        </li>
      );
    }
  }

  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
