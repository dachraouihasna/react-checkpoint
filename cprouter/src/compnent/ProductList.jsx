import Product from "./ProductCard"

function ProductList({product}) {
    return (
        <div>
{product.map((product)=>(
    <ProductCard key={product.id} product={product}/>
)
)}
</div> 
     );
}

export default ProductList ;