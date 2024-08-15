"use client";
import { RootState } from "@/lib/store";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);
  return (
    <>
      <header className="bg-[#101014] opacity-3 text-white">
        <nav className="max-w-[1200px] mx-auto my-0 flex justify-around items-center p-6">
          <h1 className="uppercase text-2xl font-semibold tracking-wider cursor-pointer">
            Cartify
          </h1>
          <ul className="flex gap-6 items-center text-xl tracking-wide cursor-pointer">
            <li>Home</li>
            <li className="flex items-center gap-1">
              <FaCartShopping />
              <span>Cart</span>
            </li>
            <li>{cartItems.length}</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
