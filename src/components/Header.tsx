"use client";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <>
      <header className="bg-[#F2F0FF] opacity-3 text-[#0D0E43] sticky top-0">
        <nav className="max-w-[1200px] mx-auto my-0 flex justify-around items-center p-6">
          <Link href="/">
            <h1 className="text-3xl font-semibold tracking-wider cursor-pointer">
              Cartify
            </h1>
          </Link>
          <ul className="flex gap-6 items-center text-2xl tracking-wide cursor-pointer">
            <Link href="/" className="relative">
              <li className="after:h-1 after:w-full after:block after:absolute after:bg-[#FB2E86] after:opacity-0 after:hover:opacity-100 after:hover:transition-all after:hover:duration-500 active:-translate-y-1 active:transition-all">
                Home
              </li>
            </Link>
            <Link href="/cart">
              <li className="flex items-center gap-2 relative active:-translate-y-1 active:transition-all">
                <FaCartShopping />
                <div className="absolute bg-[#FB2E86] w-6 h-6 left-4 -bottom-2 rounded-full flex justify-center items-center">
                  <p className="text-sm text-white font-bold">
                    {cartItems.length}
                  </p>
                </div>
                {/* <Link href={"/cart"}>
                <span>Cart</span>
              </Link> */}
              </li>
            </Link>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
