"use client";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
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
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProductsData();
      if (data) {
        console.log(data);
        setLoadingSkeleton(false);
        setProducts(data);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />
      {loadingSkeleton ? <Skeleton /> : <ProductList products={products} />}
    </>
  );
}
