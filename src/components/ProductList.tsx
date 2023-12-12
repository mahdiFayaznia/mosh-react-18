import { useEffect, useState } from "react";

// interface Props {
//   category: string;
// }

// const ProductList = ({ category }: Props) => {
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // Second arg is dependencies  -->
  // [] means no dependencies  -->  execute once in first component render
  useEffect(() => {
    console.log("Fetching products ");
    setProducts(["Clothing", "Household"]);
  }, []);

  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <h1>ProductList</h1>;
};

export default ProductList;
