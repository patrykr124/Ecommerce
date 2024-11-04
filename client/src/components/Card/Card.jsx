import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link
      to={`/product/${item.id}`}
      className="card w-80 flex flex-col gap-4
    "
    >
      <div className="card">
        <div className="image w-full h-96 overflow-hidden relative">
          <span>
            {item.attributes?.isNew && (
              <span className="t-10 left-0 absolute z-20 bg-black py-2 px-5 text-white ">
                New collection
              </span>
            )}
          </span>
          <img
            className="minImg w-full h-full object-cover absolute"
            src={
              process.env.VITE_APP_API_UPLOAD +
              item.attributes?.img.data.attributes.url
            }
            alt={item.attributes?.title}
          />
          <img
            className="secondImg w-full h-full object-cover absolute image-hover:z-20 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out"
            src={
              process.env.VITE_APP_API_UPLOAD +
              item.attributes?.img2.data.attributes.url
            }
            alt={item.attributes?.title}
          />
        </div>
        <h3>{item.attributes?.title}</h3>
        <div className="prices flex gap-5">
          <h4 className="line-through">
            {item.oldPrice || item.attributes?.price + 20} PLN
          </h4>
          <h4 className="priceBtn">{item.attributes?.price} PLN</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
