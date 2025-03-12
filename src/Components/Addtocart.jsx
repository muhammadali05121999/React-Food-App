import React from "react";
import image1 from "../assets/image11.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decrementqty, incrementqty, RemoveItem } from "../redux/cartSlice";

function Addtocart({ name, id, price, image, qty }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full  h-[120px] p-2 flex shadow-lg bg-white rounded-lg ">
      {/* Image Section */}
      <div className="w-[120px] h-full flex-shrink-0">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img
            src={image}
            alt="pancake"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex-1 h-full flex flex-col justify-center gap-2 pl-4">
        {/* Item Name and Delete Icon */}
        <div className="flex justify-between items-center">
          <div className="text-lg text-gray-700 font-semibold">{name}</div>
          <RiDeleteBin6Line
            className="text-red-500 cursor-pointer hover:text-red-700"
            onClick={() => dispatch(RemoveItem(id))}
          />
        </div>

        {/* Price */}
        <div className="text-gray-600">Rs:{price} </div>

        {/* Quantity Controls */}
        <div className="w-[100px] h-[40px] bg-white rounded-lg flex border border-green-400 overflow-hidden">
          {/* Decrease Button */}
          <button
            className="w-[30%] h-full flex items-center
           justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => (qty > 1 ? dispatch(decrementqty({ id })) : qty)}
          >
            -
          </button>

          {/* Quantity Display */}
          <span className="w-[40%] h-full flex items-center justify-center bg-white text-gray-700">
            {qty}
          </span>

          {/* Increase Button */}
          <button
            className="w-[30%] h-full flex items-center justify-center
           bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => dispatch(incrementqty({ id }))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtocart;
