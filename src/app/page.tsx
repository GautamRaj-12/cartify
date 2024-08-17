"use client";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";

export const fetchProductsData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error occurred while fetching data !!!!!");
    return null;
  }
};

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProductsData();
      if (data) {
        console.log(data);
        setProducts(data);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <ProductList products={products} />
    </>
  );
}
