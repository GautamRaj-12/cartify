type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
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
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto my-6 w-[90%] max-w-[1200px] gap-6">
        {props.products.map((product: Product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col gap-6 p-2 border-2 rounded-md"
            >
              <div className="h-64 rounded-2xl shadow-2xl">
                <img
                  src={product.image}
                  alt=""
                  className="h-full w-full rounded-xl"
                />
              </div>
              <h1>{product.title.slice(0, 30) + "..."}</h1>
              <h2>{product.price}</h2>
              <div className="flex justify-center">
                <button className="bg-[#101014] opacity-3 text-white px-3 py-4 rounded-md font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
