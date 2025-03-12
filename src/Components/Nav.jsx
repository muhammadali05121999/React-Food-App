import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import food_items from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, setCate, showCart, setShowCart } =
    useContext(dataContext); // Add showCart and setShowCart
  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input, setCate]);
  let items = useSelector((state) => state.cart);
  return (
    <div className="w-full h-[100px] bg-slate-400 flex justify-between items-center px-8 ">
      <div className="w-[60px] cursor-pointer h-[60px] hover:bg-green-300 bg-white text-green-400 flex justify-center items-center rounded-md shadow-xl ">
        <MdFastfood className="w-[30px] h-[30px]" />
      </div>

      <form
        action=""
        className="w-[40%] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl gap-4 px-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="w-[20px] h-[30px]   text-green-400" />
        <input
          type="text"
          placeholder="Search Here"
          className="w-[100%] outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className="w-[60px] h-[60px] hover:bg-green-300 bg-white cursor-pointer text-green-400 flex justify-center items-center rounded-md shadow-xl ">
        <span className="">{items.length}</span>
        <MdOutlineShoppingBag
          className="w-[30px] h-[30px] "
          onClick={() => setShowCart(true)}
        />
      </div>
    </div>
  );
}

export default Nav;
