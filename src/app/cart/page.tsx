"use client";
import Header from "@/components/Header";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  selectCartTotal,
  updateItemQuantity,
  removeItem,
} from "@/lib/features/cart/cartSlice";

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
        {cartItems.map((cartItem) => {
          return (
            <div
              key={cartItem.id}
              className="grid grid-cols-5 gap-8 mb-4 items-center"
            >
              <div className="justify-self-end">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  className="w-20 h-20"
                />
              </div>
              <h1 className="content-center">
                {cartItem.title.slice(0, 30) + "..."}
              </h1>
              <h2 className="content-center">${cartItem.price.toFixed(2)}</h2>
              <input
                type="number"
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
                Remove Item
              </button>
            </div>
          );
        })}
        <p className="text-xl font-bold mt-6">Total: ${cartTotal.toFixed(2)}</p>
      </section>
    </>
  );
};
export default Cart;
