import React, { useContext, useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Categories from "../Components/Categories"; // Correct import path
import Card from "../Components/Card";
import food_items from "../food";
import { dataContext } from "../context/UserContext"; // Import dataContext
import { IoClose } from "react-icons/io5";
import Addtocart from "../Components/Addtocart";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { Additem, clearCart } from "../redux/cartSlice"; // Import Additem and clearCart actions
import { toast } from "react-toastify";

function Home() {
  const { Cate, setCate, input, setInput, showCart, setShowCart } =
    useContext(dataContext); // Destructure from the context object
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    setCate([...food_items]); // Initialize with all items
  }, [setCate]);

  function filter(category) {
    console.log("Selected Category:", category);

    if (category === "All") {
      setCate([...food_items]); // Force re-render with a new array
      setInput(""); // Reset input state
    } else {
      const newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );

      setCate(newList);
    }
  }

  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryfee = 100;
  let taxes = (subtotal * 18) / 100;
  let grandtotal = Math.floor(subtotal + deliveryfee + taxes);

  return (
    <div className="bg-slate-500 w-full min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex p-3 flex-wrap justify-center w-[100%] items-center gap-6">
          {Categories.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[100px] h-[100px] cursor-pointer bg-white 
                rounded-lg flex flex-col items-center justify-center
                 hover:bg-green-200 transition-all duration-300"
                onClick={() => filter(item.name)}
              >
                {item.Image}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="flex flex-wrap justify-center p-4 gap-6">
        {Cate.length > 0 ? ( // Change the condition to Cate.length > 0
          Cate.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.food_name}
                image={item.food_image}
                price={item.price}
              />
            );
          })
        ) : (
          <div className="text-gray-100 text-xl p-5">dish not found </div>
        )}
      </div>

      <div
        className={` w-[40vw] h-[100%]   fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-700 overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <header className="w-[100%] flex justify-between items-center max-h-[60vh]">
          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>
          <IoClose
            className=" cursor-pointer hover:text-gray-700 w-[60px] h-[30px] text-green-400 text-[20px] font-semibold"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div className="w-full mt-8 flex flex-col gap-4  ">
              {items.map((item) => (
                <Addtocart
                  key={item.id} // Add a unique key
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            <div className="w-full border-t-2 border-b-2 border-gray-600 mt-7 flex flex-col gap-2 p-3">
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs {subtotal} /-
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs {deliveryfee} /-
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs {taxes} /-
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-600 font-semibold p-2">
                Total
              </span>
              <span className="text-green-400 font-semibold text-lg mt-3">
                Rs {grandtotal} /-
              </span>
            </div>
            <button
              className="w-[80%] p-1 hover:bg-green-200 
              transition-all bg-green-400 rounded-lg text-gray-800 font-semibold mt-5"
              onClick={() => {
                dispatch(clearCart());
                toast.success("Order placed successfully");
              }}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-2xl text-green-600 text-center p-5">
            Card Is Empty
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
