"use client";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { useEffect, useState } from "react";
import { fetchProductsData } from "@/lib/api";

export default function Page() {
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
