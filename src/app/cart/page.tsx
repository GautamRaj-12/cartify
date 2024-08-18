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
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";

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
      <section className="lg:w-1/2 w-full p-4 mx-auto my-6">
        <p className="flex justify-end gap-8 text-xl font-semibold text-headingDark border-y-2 border-headingDark px-2 py-1 mb-1">
          <span>Final Total: </span>
          <span className="font-medium">{USDollar.format(cartTotal)}</span>
          <Link
            href="#checkout"
            className="flex items-center gap-2 text-xl text-accent"
          >
            Checkout <FaAngleDoubleDown />
          </Link>
        </p>

        <div className="grid grid-cols-3 gap-8 mb-4 sm:items-center items-stretch">
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
              className="grid grid-cols-3 gap-8 mb-4 items-center text-headingDark bg-backgroundLight p-2"
            >
              <div className="self-center justify-self-start flex sm:flex-row flex-col justify-center items-center gap-6 p-1">
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
                <button
                  onClick={() => handleRemoveItemClick(cartItem.id)}
                  className="mr-1"
                >
                  <FaTrash color="#FB2E86" />
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-headingDark border-y-2 border-headingDark px-2 py-1 mb-1">
            <span>Total: </span>
            <span className="font-medium">{USDollar.format(cartTotal)}</span>
          </p>
          <p className="text-xl font-semibold text-headingDark border-b-2 border-headingDark px-2 py-1 mb-1">
            <span>Discount: </span>{" "}
            <span className="font-medium">{USDollar.format(discount)}</span>
          </p>
          <p className="text-xl font-semibold text-headingDark border-b-2 border-headingDark px-2 py-1 mb-1">
            <span>Final Total: </span>{" "}
            <span className="font-medium">
              {USDollar.format(cartTotal - discount)}
            </span>
          </p>
          <button
            className="bg-accent opacity-3 text-white px-3 h-12 sm:w-auto w-full col-span-1 rounded-sm font-semibold hover:-translate-y-2 hover:bg-white hover:border hover:border-accent hover:text-textPrimary transition-all duration-300 disabled:cursor-not-allowed mt-4"
            onClick={handleCheckout}
            disabled={buttonDisable}
            id="checkout"
          >
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};
export default Cart;
