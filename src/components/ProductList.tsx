type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  images: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList = (props: ProductListProps) => {
  return (
    <>
      {props.products.map((product: Product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        );
      })}
    </>
  );
};
export default ProductList;
