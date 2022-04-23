import ProductCard from "./ProductCard";

function ProductList({ products }) {
    console.log("hello")
    console.log("products", products)
    return (
        <>
            {
                products.map((product, key) => {
                    return <ProductCard product={product} key={product.id} />
                }



                )
            }
        </>
    );
}

export default ProductList;