"use client";
import Header from "@/components/Header";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  selectCartTotal,
  updateItemQuantity,
  removeItem,
} from "@/lib/features/cart/cartSlice";
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItemClick = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Header />
      <section className="w-1/2 mx-auto my-6">
        <p className="text-xl font-semibold mt-6 text-right mb-6 text-[#0D0E43]">
          Total: $ {cartTotal.toFixed(2)}
        </p>
        <div className="grid grid-cols-3 gap-8 mb-4 items-center">
          <div className="bg-[#0D0E43]">
            <p className="text-center text-white p-2 rounded-sm">Item</p>
          </div>
          <div className="bg-[#0D0E43]">
            <p className="text-center text-white p-2 rounded-sm">
              Price(per unit)
            </p>
          </div>
          <div className="bg-[#0D0E43]">
            <p className="text-center text-white p-2 rounded-sm">Qty</p>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return (
            <div
              key={cartItem.id}
              className="grid grid-cols-3 gap-8 mb-4 items-center text-[#0D0E43]"
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
                ${cartItem.price.toFixed(2)}
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
                  className="text-red-600 hover:underline"
                >
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
