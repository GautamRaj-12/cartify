"use client";
import Header from "@/components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <>
      <Header />
      <section className="w-1/2 mx-auto my-6">
        {cartItems.map((cartItem) => {
          return (
            <div className="grid grid-cols-3 gap-8 mb-4">
              <div className="justify-self-end">
                <img src={cartItem.image} alt="" className="w-20 h-20" />
              </div>
              <h1 className="content-center">
                {cartItem.title.slice(0, 30) + "..."}
              </h1>
              <h2 className="content-center">{cartItem.price}</h2>
              {/* <h3 className="content-center">{cartItem.quantity}</h3> */}
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Cart;
