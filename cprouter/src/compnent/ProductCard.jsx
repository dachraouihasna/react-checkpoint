function Product({ product }) {
    return (
        <div>
            {product.name} <br />
            {product.price}

        </div>
    );
}

export default Product;