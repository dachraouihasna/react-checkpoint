function ProductCard({ product }) {
    return (<>
        {product.name}
        <br />
        {product.price}
    </>);
}

export default ProductCard;