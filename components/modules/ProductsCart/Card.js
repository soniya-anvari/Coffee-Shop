import React from 'react';

function Card({ item }) {
  return (
    <div className="text-white bg-gradient-to-t from-[#14181d] via-[#262B33] to-[#262B33] p-4 rounded-2xl">
      <img
        src={item.img}
        className="w-full h-[180px] object-cover rounded-3xl"
        alt={item.name}
      />
      <p className="text-[13px] mt-4">{item.name}</p>
      <p className="mt-2 text-[9px]">
        {item.contents.split(' ').slice(0, 3).join(' ')}...
      </p>
      <div className="mt-3 flex justify-between items-center">
        <p className="text-xl font-bold">
          <span className="font-bold mr-1 text-[var(--orange-accent)]">$</span>
          {item.price}
        </p>
        <span className="inline-block bg-[var(--orange-accent)] rounded-md p-2">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5H9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 9V1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Card;
