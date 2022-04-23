import { useState } from "react";
import AddProduct from "./components/AddProduct";
import { productlist } from "./components/Data"
import ProductList from "./components/ProductList";
function App() {
  const [products, setProducts] = useState(productlist)
  const addProduct = (newproduct) => {
    setProducts([...products, newproduct])
  }
  console.log(products)
  return (
    <>
      <ProductList products={products} />
      <AddProduct addProduct={addProduct} />
    </>
  );
}

export default App;