"use client";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cart/cartSlice";
import { useState } from "react";
import Notifications from "./Notifications";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductListProps = {
  products: Product[];
};

const ProductList = (props: ProductListProps) => {
  const [notify, setNotify] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const handleAddToCartClick = (product: Product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 3000);
  };
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto my-6 w-[90%] max-w-[1200px] gap-6">
        {props.products.map((product: Product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col gap-6 shadow-lg rounded-md"
            >
              <div className="h-64 shadow-xl bg-[#F7F7F7] flex justify-center items-center">
                <img
                  src={product.image}
                  alt=""
                  className="h-[60%] w-[70%] rounded-xl"
                />
              </div>
              <div className="p-2 flex justify-between text-[#151875]">
                <h1>{product.title.slice(0, 30) + "..."}</h1>
                <h2>$ {product.price}</h2>
              </div>
              <div className="flex justify-center p-2">
                <button
                  className="bg-[#FB2E86] opacity-3 text-white px-3 py-[10px] rounded-sm font-semibold hover:-translate-y-2 hover:bg-white hover:border hover:border-[#FB2E86] hover:text-[#151875] transition-all duration-300"
                  onClick={() => {
                    handleAddToCartClick(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {notify && <Notifications />}
    </>
  );
};
export default ProductList;
