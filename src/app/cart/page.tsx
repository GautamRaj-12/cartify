"use client";
import Header from "@/components/Header";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  selectCartTotal,
  updateItemQuantity,
  removeItem,
  clearCart,
} from "@/lib/features/cart/cartSlice";
import { FaTrash } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const router = useRouter();

  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItemClick = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    if (cartItems.length >= 1) {
      dispatch(clearCart());
      router.push("/checkout");
    }
  };

  useEffect(() => {
    if (cartItems.length >= 1) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [cartItems]);

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let discount = 0;
  if (cartTotal >= 100 && cartTotal < 200) {
    discount = cartTotal * 0.2;
  }
  if (cartTotal >= 200 && cartTotal < 500) {
    discount = cartTotal * 0.3;
  }
  if (cartTotal >= 500) {
    discount = cartTotal * 0.4;
  }
  return (
    <>
      <Header />
      <section className="w-1/2 mx-auto my-6">
        <div className="flex justify-around items-center">
          <p className="text-xl font-semibold mt-6 mb-6 text-headingDark">
            Total: {USDollar.format(cartTotal)}
          </p>
          <p className="text-xl font-semibold mt-6 mb-6 text-headingDark">
            Discount: {USDollar.format(discount)}
          </p>
          <p className="text-xl font-semibold mt-6 mb-6 text-headingDark">
            Final Total: {USDollar.format(cartTotal - discount)}
          </p>
          <button
            className="bg-accent opacity-3 text-white px-3 h-12 rounded-sm font-semibold hover:-translate-y-2 hover:bg-white hover:border hover:border-accent hover:text-textPrimary transition-all duration-300 disabled:cursor-not-allowed"
            onClick={handleCheckout}
            disabled={buttonDisable}
          >
            Checkout
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-4 items-center">
          <div className="bg-headingDark">
            <p className="text-center text-white p-2 rounded-sm">Item</p>
          </div>
          <div className="bg-headingDark">
            <p className="text-center text-white p-2 rounded-sm">
              Price(per unit)
            </p>
          </div>
          <div className="bg-headingDark">
            <p className="text-center text-white p-2 rounded-sm">Qty</p>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return (
            <div
              key={cartItem.id}
              className="grid grid-cols-3 gap-8 mb-4 items-center text-headingDark"
            >
              <div className="self-center justify-self-start flex justify-center items-center gap-6 p-1">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  className="w-20 h-20"
                />
                <h1 className="justify-self-start">
                  {cartItem.title.slice(0, 30) + "..."}
                </h1>
              </div>
              <h2 className="justify-self-center">
                {USDollar.format(cartItem.price)}
              </h2>
              <div className="justify-self-center flex gap-6">
                <input
                  type="text"
                  value={cartItem.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(cartItem.id, parseInt(e.target.value))
                  }
                  className="w-16 text-center border border-gray-300 rounded"
                />
                <button onClick={() => handleRemoveItemClick(cartItem.id)}>
                  <FaTrash color="#FB2E86" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Cart;
