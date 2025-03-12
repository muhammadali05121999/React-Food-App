import React from "react";
import { Additem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Card({ id, name, price, image }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-400px] shadow-xl bg-white   p-3    flex flex-col gap-3 hover:border-4 border-green-200 rounded-lg">
      <div className="w-full h-[200px] flex justify-center items-center ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="text-xl font-semibold text-green-500">Rs {price}</div>

      <button
        className="w-full p-1 hover:bg-green-200 
      transition-all bg-green-400 rounded-lg text-gray-800 font-semibold"
        onClick={() => {
          dispatch(
            Additem({
              id: id,
              name: name,
              price: price,
              image: image,
              qty: 1,
            })
          );
          toast.success("Item Added");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
